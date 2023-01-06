<?php

namespace App\Models;

use AmrShawky\LaravelCurrency\Facade\Currency;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Rules\BaseExists;
use App\Rules\SymbolExists;
use App\Models\User;
use Validator;
use Exception;

class ExchangeRate extends Model
{
    use HasFactory;

    /*
     * @var float
     */
    protected $conversion_percentage = null;

    /**
     * The attributes that are not mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    public function __construct() {
        $this->conversion_percentage = config('app.conversion_percentage');
    }

    /**
     * @param int $userId
     * @param string $base
     * @param array $symbols
     * @param float $amount
     * @param int $round (optional)
     * @param string $ecb (optional)
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validateExchange($request) {
        try {
            $input = $request->only(['user_id', 'base', 'symbols', 'amount',]);
        } catch (Exception $e) {
            $request->only(['base', 'symbols', 'amount',]);
        }
        return Validator::make(
            $input,
            [
                'user_id' => 'exists:App\Models\User,id',
                'base' => [
                    'required', 
                    'alpha',
                    'min:3',
                    'max:3',
                    new BaseExists(),
                ],
                'symbols' => 'required|array',
                'symbols.*' => [
                    'required', 
                    'alpha',
                    'min:3',
                    'max:3',
                    new SymbolExists(),
                ],
                'amount' => 'required|numeric|between:0,10000.99',
            ],
        );
    }

    /**
     * @param string $base
     * @param array $symbols
     * @param float $amount
     * @param int $round (optional)
     * @param string $ecb (optional)
     * @return array
     */
    public function cleanExchange($unsanitizedInput) {
        $user_id = $unsanitizedInput['user_id'] ?? null;
        $base = $unsanitizedInput['base'];
        $symbols = $unsanitizedInput['symbols'];
        $amount = $unsanitizedInput['amount'];
        $result = [
            'base' => htmlspecialchars($base),
            'symbols' => [],
            'amount' => number_format($amount, 2), // sanitised by validation
        ];
        if (null !== $user_id) {
            $result['user_id'] = filter_var($user_id, FILTER_SANITIZE_NUMBER_INT);
        }
        for($i=0; $i < sizeof($symbols); $i++)
        {
            $result['symbols'][$i] = strtoupper(htmlspecialchars(
                $symbols[$i]
            ));
        }
        return $result;
    }
    
    /**
     * @param string $base
     * @param array $symbols
     * @param float $amount
     * @param int $round (optional)
     * @param string $ecb (optional)
     * @return \App\Models\ExchangeRate
     */
    public function exchange($input) {
        $base = $input['base'];
        $symbols = $input['symbols'];
        $amount = $input['amount'];
        $round = $input['round'] ?? 2;
        $source = $input['source'] ?? 'ecb';
        $rate = Currency::rates()
            ->latest()
            ->symbols($symbols)
            ->base($base)
            ->amount($amount)
            ->round($round)
            ->source($source)
            ->get();
        try {
            $this->attributes['user_id'] = $input['user_id'];
        } catch (Exception $e) {
            $this->attributes['user_id'] = null;
        }
        $conversion = (float) $this->conversion_percentage * $rate[$input['symbols'][0]];
        $this->attributes['from'] = $input['base'];
        $this->attributes['to'] = $input['symbols'][0];
        $this->attributes['to_conversion'] = number_format($rate[$input['symbols'][0]], 2);
        $this->attributes['conversion_percentage'] = number_format($this->conversion_percentage, 2);
        $this->attributes['conversion'] = number_format($rate[$input['symbols'][0]] + $conversion, 2);
        $this->attributes['amount'] = number_format($input['amount'], 2);
        $this->save();
        return $this;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
}

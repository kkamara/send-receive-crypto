<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class SymbolExists implements Rule
{
    /**
     * @var mixed
     */
    protected $symbols;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->symbols = getSymbols();
        $this->symbols = explode(', ', $this->symbols);
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return in_array($value, $this->symbols);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return __('validation.custom.symbols.symbol-exists');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\ExchangeRate;
use Illuminate\Http\Request;
use App\Http\Resources\ExchangeRateResource;

class ExchangeRateController extends Controller
{
    /**
     * @param \App\Models\ExchangeRate $exchangeRate
     */
    public function __construct(protected ExchangeRate $exchangeRate)
    {
        $this->exchangeRate = new ExchangeRate();
    }

    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\App\Http\Resources\ExchangeRateResource
     */
    public function index(Request $request)
    {
        $validator = $this->exchangeRate
            ->validateExchange($request);
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }
        $validatedInput = $validator->validated();
        $cleanInput = $this->exchangeRate->cleanExchange(
            $validatedInput
        );
        return new ExchangeRateResource($this->exchangeRate->exchange(
            $cleanInput
        ));
    }

    /**
     * Get base characters like USD, EUR, EGP.
     * @return \Illuminate\Http\JsonResponse
     */
    public function getBaseCharacters() {
        $result = explode(', ', getBaseCharacters());
        return response()->json(['data' => $result,]);
    }

    /**
     * Get symbols like BTC, ETH.
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSymbols() {
        $result = explode(', ', getSymbols());
        return response()->json(['data' => $result,]);
    }
}

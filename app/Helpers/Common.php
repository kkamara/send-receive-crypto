<?php

if (!function_exists('getBaseCharacters')) {
    /**
     * @return string
     */
    function getBaseCharacters() {
        $baseCharacters = json_decode(
            file_get_contents(
                storage_path('app/symbols.json')
            )
        , true);
        $result = '';
        foreach ($baseCharacters['symbols'] as $char => $tmp) {
            if (strlen($result)) {
                $result .= ', ' . $char;
            } else {
                $result = $char;
            }
        }
        return $result;
    }
}

if (!function_exists('getSymbols')) {
  /**
   * @return string
   */
  function getSymbols() {
      $symbols = json_decode(
          file_get_contents(
              storage_path('app/cryptocurrencies.json')
        )
      , true);
      $result = '';
      foreach ($symbols['symbols'] as $symbol => $tmp) {
          if (strlen($result)) {
              $result .= ', ' . $symbol;
          } else {
              $result = $symbol;
          }
      }
      return $result;
  }
}
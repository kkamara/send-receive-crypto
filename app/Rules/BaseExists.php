<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class BaseExists implements Rule
{
    /**
     * @var mixed
     */
    protected $baseCharacters;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->baseCharacters = getBaseCharacters();
        $this->baseCharacters = explode(', ', $this->baseCharacters);
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
        return in_array($value, $this->baseCharacters);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return __('validation.custom.base.base-exists');
    }
}

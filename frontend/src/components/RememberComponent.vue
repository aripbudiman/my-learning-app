<template>
    <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
            <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                id="remember">
            </button>
            <input aria-hidden="true" tabindex="-1" type="checkbox" value="on"
                style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;">
            <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
                for="remember">Remember me
            </label>
        </div>
        <button class="btn-link">Forgot password?</button>
    </div>
</template>
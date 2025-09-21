<template>
    <div class="flex items-start space-x-2">
        <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
            class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            id="terms">
        </button>
        <input aria-hidden="true" tabindex="-1" type="checkbox" value="on"
            style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;">
        <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm leading-5"
            for="terms">I agree to the
            <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline p-0 h-auto text-sm">Terms
                of Service
            </button> and
            <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline p-0 h-auto text-sm">Privacy
                Policy
            </button>
        </label>
    </div>
</template>
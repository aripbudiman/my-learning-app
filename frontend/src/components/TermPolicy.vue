<template>
    <div class="flex items-start space-x-2">
        <input type="checkbox" value="on" class="h-4 w-4">
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
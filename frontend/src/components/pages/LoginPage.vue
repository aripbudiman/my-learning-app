<template>
    <div class="App">
        <div
            class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
            <div class="w-full max-w-md">
                <div class="text-center mb-8">
                    <div class="inline-flex items-center space-x-3 mb-4">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-book-open w-7 h-7 text-white"
                                aria-hidden="true">
                                <path d="M12 7v14"></path>
                                <path
                                    d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                </path>
                            </svg>
                        </div>
                        <h1 class="text-3xl font-bold text-slate-900">CodeLearner</h1>
                    </div>
                    <p class="text-slate-600">Welcome back to your coding journey</p>
                </div>
                <div class="rounded-xl text-card-foreground shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                    <div class="flex flex-col p-6 space-y-1 pb-6">
                        <div dir="ltr" data-orientation="horizontal" class="w-full">
                            <div role="tablist" aria-orientation="horizontal"
                                class="h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground grid w-full grid-cols-2 mb-6"
                                tabindex="0" data-orientation="horizontal" style="outline: none;"><button type="button"
                                    role="tab" aria-selected="true" aria-controls="radix-:ri:-content-signin"
                                    data-state="active" id="radix-:ri:-trigger-signin"
                                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-sm"
                                    tabindex="0" data-orientation="horizontal" data-radix-collection-item="">Sign
                                    In</button><button type="button" role="tab" aria-selected="false"
                                    aria-controls="radix-:ri:-content-signup" data-state="inactive"
                                    id="radix-:ri:-trigger-signup"
                                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-sm"
                                    tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Sign
                                    Up</button></div>
                            <div data-state="active" data-orientation="horizontal" role="tabpanel"
                                aria-labelledby="radix-:ri:-trigger-signin" id="radix-:ri:-content-signin" tabindex="0"
                                class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-6"
                                style="">
                                <div class="text-center">
                                    <div class="font-semibold tracking-tight text-2xl">Welcome Back</div>
                                    <div class="text-muted-foreground text-base">Sign in to continue your learning
                                        progress</div>
                                </div>
                                <div class="space-y-3"><button
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-input shadow-sm hover:text-accent-foreground px-4 py-2 w-full h-12 text-base border-2 hover:bg-slate-50"><svg
                                            class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                            <path fill="#4285F4"
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z">
                                            </path>
                                            <path fill="#34A853"
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z">
                                            </path>
                                            <path fill="#FBBC05"
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z">
                                            </path>
                                            <path fill="#EA4335"
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z">
                                            </path>
                                        </svg>Continue with Google</button><button
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-input shadow-sm hover:text-accent-foreground px-4 py-2 w-full h-12 text-base border-2 hover:bg-slate-50"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-github w-5 h-5 mr-3" aria-hidden="true">
                                            <path
                                                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                            </path>
                                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                        </svg>Continue with GitHub</button></div>
                                <div class="relative">
                                    <div class="absolute inset-0 flex items-center">
                                        <div data-orientation="horizontal" role="none"
                                            class="shrink-0 bg-border h-[1px] w-full"></div>
                                    </div>
                                    <div class="relative flex justify-center text-xs uppercase"><span
                                            class="bg-white px-2 text-slate-500">Or continue with email</span></div>
                                </div>
                                <form class="space-y-4">
                                    <div class="space-y-2"><label
                                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            for="signin-email">Email</label>
                                        <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-slate-400"
                                                aria-hidden="true">
                                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                            </svg><input
                                                class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 h-12"
                                                id="signin-email" placeholder="Enter your email" required=""
                                                type="email" value=""></div>
                                    </div>
                                    <div class="space-y-2"><label
                                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            for="signin-password">Password</label>
                                        <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-slate-400"
                                                aria-hidden="true">
                                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                            </svg><input
                                                class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 h-12"
                                                id="signin-password" placeholder="Enter your password" required=""
                                                type="password" value=""><button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground rounded-md text-xs absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                                type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-eye h-4 w-4 text-slate-400" aria-hidden="true">
                                                    <path
                                                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0">
                                                    </path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg></button></div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center space-x-2"><button type="button" role="checkbox"
                                                aria-checked="false" data-state="unchecked" value="on"
                                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                                id="remember"></button><input aria-hidden="true" tabindex="-1"
                                                type="checkbox" value="on"
                                                style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"><label
                                                class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
                                                for="remember">Remember me</label></div><button
                                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline p-0 h-auto text-sm">Forgot
                                            password?</button>
                                    </div>
                                    <button
                                        class="inline-flex text-white items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 px-4 py-2 w-full h-12 text-base bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                                        type="submit">Sign In<svg xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-arrow-right w-4 h-4 ml-2" aria-hidden="true">
                                            <path d="M5 12h14"></path>
                                            <path d="m12 5 7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                            <div data-state="inactive" data-orientation="horizontal" role="tabpanel"
                                aria-labelledby="radix-:ri:-trigger-signup" id="radix-:ri:-content-signup" tabindex="0"
                                class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-6"
                                hidden=""></div>
                        </div>
                    </div>
                </div>
                <p class="text-center text-sm text-slate-500 mt-6">By continuing, you agree to our Terms of Service
                    and Privacy Policy</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useHead } from "@vueuse/head";

import { useRoute } from "vue-router";
import VMessage from "../Components/VMessage.vue";
import VField from "../Components/VField.vue";
import VControl from "../Components/VControl.vue";
import VLabel from "../Components/VLable.vue";
import { ref } from "vue";
import VInput from "../Components/VInput.vue";

import { Link } from "@inertiajs/inertia-vue3";

type StepId = "login" | "forgot-password";
const step = ref<StepId>("login");
const route = useRoute();

const handleLogin = async () => {};

// useHead({
//   title: 'Auth Login 1 - Vuero',
// })
</script>

<template>
    <div class="modern-login">
        <div class="underlay h-hidden-mobile h-hidden-tablet-p"></div>

        <div class="columns is-gapless is-vcentered">
            <div
                class="column is-relative is-8 h-hidden-mobile h-hidden-tablet-p"
            >
                <div class="hero is-fullheight is-image">
                    <div class="hero-body">
                        <div class="container">
                            <div class="columns">
                                <div class="column">
                                    <img
                                        class="hero-image"
                                        src="/images/station.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4 is-relative">
                <!-- <RouterLink to="/" class="top-logo">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink> -->

                <!-- <label
          class="dark-mode ml-auto"
          tabindex="0"
          @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
        >
          <input
            data-cy="dark-mode-toggle"
            type="checkbox"
            :checked="!darkmode.isDark"
            @change="darkmode.onChange"
          />
          <span></span>
        </label> -->
                <div class="is-form">
                    <div class="hero-body">
                        <div>
                            <svg
                                style="margin: auto"
                                id="OBJECTS"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 160 160"
                                xml:space="preserve"
                                class=""
                                width="38px"
                                height="38px"
                                data-v-92d142c0=""
                                data-v-6c56cc25=""
                            >
                                <g class="" data-v-92d142c0="">
                                    <g data-v-92d142c0="">
                                        <path
                                            class="right"
                                            d="M67.3,55.7L75.6,70l3.7,6.4l22.1,38.3l35.9-0.1L78.2,14.1L61.2,45L67.3,55.7z M130.1,114.5l-21.3,0.1"
                                            data-v-92d142c0=""
                                        ></path>
                                        <path
                                            class="left"
                                            d="M39.1,145.9l11.7-20.3l2.7-4.7l3.7-6.4l22.1-38.3L61.2,45L3.6,145.9H39.1z M64.8,51.5l2.5,4.2l8.3,14.2V70
                        L64.8,51.5z"
                                            data-v-92d142c0=""
                                        ></path>
                                        <path
                                            style="fill: #41b983"
                                            class="bottom"
                                            d="M39,145.9h117.4l-19.1-31.4l-80.1,0.1L39,145.9z M53.4,121l-10.6,18.5l7.9-13.9L53.4,121z"
                                            data-v-92d142c0=""
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div
                            class="form-text"
                            :class="[step !== 'login' && 'is-hidden']"
                        >
                            <h2>Sign In</h2>
                            <p>Welcome back to your account.</p>
                        </div>
                        <div
                            class="form-text"
                            :class="[step === 'login' && 'is-hidden']"
                        >
                            <h2>Recover Account</h2>
                            <p>Reset your account password.</p>
                        </div>
                        <form
                            data-cy="login-form"
                            :class="[step !== 'login' && 'is-hidden']"
                            class="login-wrapper"
                            @submit.prevent="handleLogin"
                        >
                            <VMessage color="primary">
                                <div>
                                    <strong class="pr-1">email:</strong>
                                    <span>john.doe@cssninja.io</span>
                                </div>
                                <div>
                                    <strong class="pr-1">password:</strong>
                                    <span>ada.lovelace</span>
                                </div>
                            </VMessage>

                            <VField>
                                <VControl icon="lnil lnil-envelope autv-icon">
                                    <VLabel class="auth-label"
                                        >Email Address</VLabel
                                    >
                                    <VInput
                                        data-cy="email-input"
                                        type="email"
                                        autocomplete="current-password"
                                    />
                                </VControl>
                            </VField>
                            <VField>
                                <VControl icon="lnil lnil-lock-alt autv-icon">
                                    <VLabel class="auth-label">Password</VLabel>
                                    <VInput
                                        data-cy="password-input"
                                        type="password"
                                        autocomplete="current-password"
                                    />
                                </VControl>
                            </VField>

                            <VField>
                                <VControl class="is-flex">
                                    <VLabel raw class="remember-toggle">
                                        <VInput raw type="checkbox" />

                                        <span class="toggler">
                                            <span class="active">
                                                <i
                                                    aria-hidden="true"
                                                    class="iconify"
                                                    data-icon="feather:check"
                                                ></i>
                                            </span>
                                            <span class="inactive">
                                                <i
                                                    aria-hidden="true"
                                                    class="iconify"
                                                    data-icon="feather:circle"
                                                ></i>
                                            </span>
                                        </span>
                                    </VLabel>
                                    <VLabel raw class="remember-me"
                                        >Remember Me</VLabel
                                    >
                                    <a
                                        tabindex="0"
                                        @keydown.space.prevent="
                                            step = 'forgot-password'
                                        "
                                        @click="step = 'forgot-password'"
                                    >
                                        Forgot Password?
                                    </a>
                                </VControl>
                            </VField>

                            <div class="button-wrap has-help">
                                <button
                                    id="login-button"
                                    class="button button v-button is-rounded is-bold is-big is-raised is-primary"
                                    type="submit"
                                >
                                    Confirm
                                </button>
                                <span>
                                    Or
                                    <Link href="/signup">Create</Link>
                                    an account.
                                </span>
                            </div>
                        </form>

                        <form
                            :class="[step !== 'forgot-password' && 'is-hidden']"
                            class="login-wrapper"
                            @submit.prevent
                        >
                            <p class="recover-text">
                                Enter your email and click on the confirm button
                                to reset your password. We'll send you an email
                                detailing the steps to complete the procedure.
                            </p>

                            <VField>
                                <VControl icon="lnil lnil-envelope autv-icon">
                                    <VLabel class="auth-label"
                                        >Email Address</VLabel
                                    >
                                    <VInput
                                        type="email"
                                        autocomplete="current-password"
                                    />
                                </VControl>
                            </VField>
                            <div class="button-wrap">
                                <VButton
                                    color="white"
                                    size="big"
                                    lower
                                    rounded
                                    @click="step = 'login'"
                                >
                                    Cancel
                                </VButton>
                                <VButton
                                    color="primary"
                                    size="big"
                                    type="submit"
                                    lower
                                    rounded
                                    solid
                                    @click="step = 'login'"
                                >
                                    Confirm
                                </VButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.left {
    fill: var(--primary-light-15);
}
.right {
    fill: var(--primary-dark-7);
}
.botton {
    fill: var(--primary);
}
.modern-login {
    position: relative;
    background: var(--white);
    min-height: 100vh;

    .column {
        &.is-relative {
            position: relative;
        }
    }

    .hero {
        &.has-background-image {
            position: relative;

            .hero-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #5d4298 !important;
                opacity: 0.6;
            }
        }
    }

    .underlay {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 66.6%;
        height: 100%;
        background: #fdfdfd;
        z-index: 0;
    }

    .dark-mode {
        position: absolute;
        top: -25px;
        right: 38px;
        transform: scale(0.6);
        z-index: 2;
    }

    .top-logo {
        position: absolute;
        top: -30px;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;

        img {
            display: block;
            width: 100%;
            max-width: 50px;
            margin: 0 auto;
        }

        svg {
            height: 50px;
            width: 50px;
        }
    }

    .is-image {
        position: relative;
        border-right: 1px solid var(--fade-grey);

        .hero-image {
            position: relative;
            z-index: 2;
            display: block;
            margin: -80px auto 0;
            max-width: 60%;
            width: 60%;
        }
    }

    .is-form {
        position: relative;
        max-width: 420px;
        margin: 0 auto;

        form {
            animation: fadeInLeft 0.5s;
        }

        .form-text {
            padding: 0 20px;
            animation: fadeInLeft 0.5s;

            h2 {
                font-family: var(--font-alt);
                font-weight: 400;
                font-size: 2rem;
                color: var(--primary);
            }

            p {
                color: var(--muted-grey);
                margin-top: 10px;
            }
        }

        .recover-text {
            font-size: 0.9rem;
            color: var(--dark-text);
        }

        .login-wrapper {
            padding: 30px 20px;

            .control {
                position: relative;
                width: 100%;
                margin-top: 16px;

                .input {
                    padding-top: 14px;
                    height: 60px;
                    border-radius: 10px;
                    padding-left: 55px;
                    transition: all 0.3s; // transition-all test

                    &:focus {
                        background: var(--fade-grey-light-6);
                        border-color: var(--placeholder);

                        ~ .auth-label,
                        ~ .autv-icon i {
                            color: var(--muted-grey);
                        }
                    }
                }

                .error-text {
                    color: var(--danger);
                    font-size: 0.8rem;
                    display: none;
                    padding: 2px 6px;
                }

                .auth-label {
                    position: absolute;
                    top: 6px;
                    left: 55px;
                    font-size: 0.8rem;
                    color: var(--dark-text);
                    font-weight: 500;
                    z-index: 2;
                    transition: all 0.3s; // transition-all test
                }

                .autv-icon,
                :deep(.autv-icon) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 60px;
                    width: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 24px;
                    color: var(--placeholder);
                    transition: all 0.3s;
                }

                &.has-validation {
                    .validation-icon {
                        position: absolute;
                        top: 0;
                        right: 0;
                        height: 60px;
                        width: 60px;
                        display: none;
                        justify-content: center;
                        align-items: center;

                        .icon-wrapper {
                            height: 20px;
                            width: 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: var(--radius-rounded);

                            svg {
                                height: 10px;
                                width: 10px;
                                stroke-width: 3px;
                                color: var(--white);
                            }
                        }

                        &.is-success {
                            .icon-wrapper {
                                background: var(--success);
                            }
                        }

                        &.is-error {
                            .icon-wrapper {
                                background: var(--danger);
                            }
                        }
                    }

                    &.has-success {
                        .validation-icon {
                            &.is-success {
                                display: flex;
                            }

                            &.is-error {
                                display: none;
                            }
                        }
                    }

                    &.has-error {
                        .input {
                            border-color: var(--danger);
                        }

                        .error-text {
                            display: block;
                        }

                        .validation-icon {
                            &.is-error {
                                display: flex;
                            }

                            &.is-success {
                                display: none;
                            }
                        }
                    }
                }

                &.is-flex {
                    display: flex;
                    align-items: center;

                    a {
                        display: block;
                        margin-left: auto;
                        color: var(--muted-grey);
                        font-weight: 500;
                        font-size: 0.9rem;
                        transition: color 0.3s;

                        &:hover,
                        &:focus {
                            color: var(--primary);
                        }
                    }

                    .remember-me {
                        font-size: 0.9rem;
                        color: var(--muted-grey);
                        font-weight: 500;
                    }
                }
            }

            .button-wrap {
                margin: 40px 0;

                &.has-help {
                    display: flex;
                    align-items: center;

                    > span {
                        margin-left: 12px;
                        font-family: var(--font);

                        a {
                            color: var(--primary);
                            font-weight: 500;
                            padding: 0 2px;
                        }
                    }
                }

                .button {
                    height: 46px;
                    width: 140px;
                    margin-left: 6px;

                    &:first-child {
                        &:hover {
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
    }
}

.remember-toggle {
    width: 65px;
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
    transform: scale(0.9);

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;

        &:checked ~ .toggler {
            border-color: var(--primary);

            .active,
            .inactive {
                transform: translateX(100%) rotate(360deg);
            }

            .active {
                opacity: 1;
            }

            .inactive {
                opacity: 0;
            }
        }
    }

    .toggler {
        position: relative;
        display: block;
        height: 34px;
        width: 61px;
        border: 2px solid var(--placeholder);
        border-radius: 100px;
        transition: all 0.3s; // transition-all test

        .active,
        .inactive {
            position: absolute;
            top: 2px;
            left: 2px;
            height: 26px;
            width: 26px;
            border-radius: var(--radius-rounded);
            background: black;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateX(0) rotate(0);
            transition: all 0.3s ease;

            svg {
                color: var(--white);
                height: 14px;
                width: 14px;
                stroke-width: 3px;
            }
        }

        .inactive {
            background: var(--placeholder);
            border-color: var(--placeholder);
            opacity: 1;
            z-index: 1;
        }

        .active {
            background: var(--primary);
            border-color: var(--primary);
            opacity: 0;
            z-index: 0;
        }
    }
}

@media only screen and (max-width: 767px) {
    .modern-login {
        .top-logo {
            top: 30px;
        }

        .dark-mode {
            top: 36px;
            right: 44px;
        }

        .is-form {
            padding-top: 100px;
        }
    }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    .modern-login {
        .top-logo {
            svg {
                height: 60px;
                width: 60px;
            }
        }

        .dark-mode {
            top: -58px;
            right: 30%;
        }

        .columns {
            display: flex;
            height: 100vh;
        }
    }
}

/* ==========================================================================
Dark mode
========================================================================== */

.is-dark {
    .modern-login {
        background: var(--dark-sidebar);

        .underlay {
            background: var(--dark-sidebar-light-10);
        }

        .is-image {
            border-color: var(--dark-sidebar-light-10);
        }

        .is-form {
            .form-text {
                h2 {
                    color: var(--primary);
                }
            }

            .login-wrapper {
                .control {
                    &.is-flex {
                        a:hover {
                            color: var(--primary);
                        }
                    }

                    .input {
                        background: var(--dark-sidebar-light-4);

                        &:focus {
                            border-color: var(--primary);

                            ~ .autv-icon {
                                i {
                                    color: var(--primary);
                                }
                            }
                        }
                    }

                    .auth-label {
                        color: var(--light-text);
                    }
                }

                .button-wrap {
                    &.has-help {
                        span {
                            color: var(--light-text);

                            a {
                                color: var(--primary);
                            }
                        }
                    }
                }
            }
        }
    }

    .remember-toggle {
        input {
            &:checked + .toggler {
                border-color: var(--primary);

                > span {
                    background: var(--primary);
                }
            }
        }

        .toggler {
            border-color: var(--dark-sidebar-light-12);

            > span {
                background: var(--dark-sidebar-light-12);
            }
        }
    }
}
</style>

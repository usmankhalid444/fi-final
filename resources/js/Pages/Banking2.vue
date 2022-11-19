<script setup lang="ts">
import type { TinySliderInstance } from "tiny-slider/src/tiny-slider";
import { tns } from "tiny-slider/src/tiny-slider";

import { ref, onMounted } from "vue";

import ApexChart from "vue3-apexcharts";
import { incomeOptions } from "../data/incomingChartOne";
import VControl from "../Components/VControl.vue";
import VField from "../Components/VField.vue";
import VBlock from "../Components/VBlock.vue";
import VIconBox from "../Components/VIconBox.vue";
import Multiselect from "@vueform/multiselect";
import VAvatar from "../Components/VAvatar.vue";
import UserPopover from "../Components/popover/UserPopoverContent.vue";
// import { incomeOptions } from '../data/incomeHistoryChart'
import { popovers } from "../data/usersPopovers";
import VProgress from "../Components/VProgress.vue";

import { expensesOptions } from "../data/expensesAreaChart";
import { valueSingle, optionsSingle } from "../data/dashboardData2";
const subSidebarVisible = ref(true);

let slider: TinySliderInstance;

const sliderElement = ref<HTMLElement>();
onMounted(() => {
    console.log("called yesy");

    if (sliderElement.value) {
        slider = tns({
            container: sliderElement.value,
            controls: false,
            nav: true,
            mouseDrag: true,
            items: 1.9,
            center: false,
            loop: false,
            responsive: {
                320: {
                    items: 1.7,
                },
                700: {
                    items: 1.9,
                },
                900: {
                    items: 1.9,
                },
            },
        });
    }
});

const goto = (index: number) => {
    if (slider) {
        slider.goTo(index);
    }
};
</script>

<template>
    <div
        class="view-wrapper"
        :class="subSidebarVisible ? 'view-wrapper-p-full' : ''"
    >
        <div class="page-content-wrapper vw-w">
            <div class="page-content is-relative">
                <div class="page-title has-text-centered">
                    <!-- Sidebar Trigger -->
                    <div
                        class="vuero-hamburger nav-trigger push-resize"
                        tabindex="0"
                        @click="
                            (subSidebarVisible = !subSidebarVisible),
                                $emit('slideStatus', subSidebarVisible)
                        "
                    >
                        <span
                            class="menu-toggle has-chevron"
                            v-if="subSidebarVisible"
                            ><span class="active icon-box-toggl"
                                ><span class="rotate"
                                    ><i
                                        aria-hidden="true"
                                        class="icon-line-top"
                                    ></i
                                    ><i
                                        aria-hidden="true"
                                        class="icon-line-center"
                                    ></i
                                    ><i
                                        aria-hidden="true"
                                        class="icon-line-bottom"
                                    ></i></span></span
                        ></span>
                        <span class="menu-toggle has-chevron" v-else
                            ><span class="active icon-box-toggle"
                                ><span class="rotate"
                                    ><i
                                        aria-hidden="true"
                                        class="icon-line-top"
                                    ></i
                                    ><i
                                        aria-hidden="true"
                                        class="icon-line-center"
                                    ></i
                                    ><i
                                        aria-hidden="true"
                                        class="icon-line-bottom"
                                    ></i></span></span
                        ></span>
                    </div>
                    <div class="title-wrap">
                        <h1 class="title is-4">Banking 2</h1>
                    </div>
                    <div class="toolbar ml-auto desktop-toolbar">
                        <div class="toolbar-link">
                            <label tabindex="0" class="dark-mode ml-auto"
                                ><input
                                    data-cy="dark-mode-toggle"
                                    type="checkbox" /><span></span
                            ></label>
                        </div>
                        <a tabindex="0" class="toolbar-link right-panel-trigger"
                            ><img src="/images/icons/flags/france.svg" alt=""
                        /></a>
                        <div class="toolbar-notifications is-hidden-mobile">
                            <div
                                class="dropdown is-spaced is-dots is-right dropdown-trigger"
                            >
                                <div
                                    tabindex="0"
                                    class="is-trigger"
                                    aria-haspopup="true"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--feather"
                                        width="1em"
                                        height="1em"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                        data-icon="feather:bell"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9m-4.27 13a2 2 0 0 1-3.46 0"
                                        ></path></svg
                                    ><span class="new-indicator pulsate"></span>
                                </div>
                                <div class="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                        <div class="heading">
                                            <div class="heading-left">
                                                <h6 class="heading-title">
                                                    Notifications
                                                </h6>
                                            </div>
                                            <div class="heading-right">
                                                <a
                                                    href="/sidebar/layouts/profile-notifications"
                                                    class="notification-link"
                                                >
                                                    See all
                                                </a>
                                            </div>
                                        </div>
                                        <ul class="notification-list">
                                            <li>
                                                <a class="notification-item"
                                                    ><div class="img-left">
                                                        <img
                                                            class="user-photo"
                                                            alt=""
                                                            src="/demo/avatars/7.jpg"
                                                        />
                                                    </div>
                                                    <div class="user-content">
                                                        <p class="user-info">
                                                            <span class="name"
                                                                >Alice C.</span
                                                            >
                                                            left a comment.
                                                        </p>
                                                        <p class="time">
                                                            1 hour ago
                                                        </p>
                                                    </div></a
                                                >
                                            </li>
                                            <li>
                                                <a class="notification-item"
                                                    ><div class="img-left">
                                                        <img
                                                            class="user-photo"
                                                            alt=""
                                                            src="/demo/avatars/12.jpg"
                                                        />
                                                    </div>
                                                    <div class="user-content">
                                                        <p class="user-info">
                                                            <span class="name"
                                                                >Joshua S.</span
                                                            >
                                                            uploaded a file.
                                                        </p>
                                                        <p class="time">
                                                            2 hours ago
                                                        </p>
                                                    </div></a
                                                >
                                            </li>
                                            <li>
                                                <a class="notification-item"
                                                    ><div class="img-left">
                                                        <img
                                                            class="user-photo"
                                                            alt=""
                                                            src="/demo/avatars/13.jpg"
                                                        />
                                                    </div>
                                                    <div class="user-content">
                                                        <p class="user-info">
                                                            <span class="name"
                                                                >Tara S.</span
                                                            >
                                                            sent you a message.
                                                        </p>
                                                        <p class="time">
                                                            2 hours ago
                                                        </p>
                                                    </div></a
                                                >
                                            </li>
                                            <li>
                                                <a class="notification-item"
                                                    ><div class="img-left">
                                                        <img
                                                            class="user-photo"
                                                            alt=""
                                                            src="/demo/avatars/25.jpg"
                                                        />
                                                    </div>
                                                    <div class="user-content">
                                                        <p class="user-info">
                                                            <span class="name"
                                                                >Melany W.</span
                                                            >
                                                            left a comment.
                                                        </p>
                                                        <p class="time">
                                                            3 hours ago
                                                        </p>
                                                    </div></a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            class="toolbar-link right-panel-trigger"
                            aria-label="View activity panel"
                            tabindex="0"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                class="iconify iconify--feather"
                                width="1em"
                                height="1em"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                                data-icon="feather:grid"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zM3 14h7v7H3z"
                                ></path></svg
                        ></a>
                    </div>
                </div>
                <div class="page-content-inner">
                    <div class="banking-dashboard banking-dashboard-v2">
                        <!--Panel-->
                        <div class="dashboard-card is-card-panel">
                            <div class="columns is-gapless">
                                <div class="column is-8">
                                    <!--Box-->
                                    <div class="inner-box has-bounds">
                                        <div class="box-title">
                                            <h3>My Cards</h3>
                                        </div>

                                        <div class="cards-wrapper">
                                            <div class="controls">
                                                <button class="button is-large">
                                                    <span class="icon is-medium"
                                                        ><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            aria-hidden="true"
                                                            role="img"
                                                            class="iconify iconify--feather"
                                                            width="1em"
                                                            height="1em"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            viewBox="0 0 24 24"
                                                            data-icon="feather:plus"
                                                        >
                                                            <path
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M12 5v14m-7-7h14"
                                                            ></path></svg
                                                    ></span>
                                                </button>
                                            </div>

                                            <!--Carousel-->
                                            <div class="cards-carousel">
                                                <div
                                                    ref="sliderElement"
                                                    class="cards-carousel-inner"
                                                >
                                                    <!--Carousel Item-->
                                                    <div
                                                        class="cards-carousel-item"
                                                        tabindex="0"
                                                        @keydown.space.prevent="
                                                            goto(0)
                                                        "
                                                        @click="goto(0)"
                                                    >
                                                        <div class="ccard">
                                                            <div
                                                                class="shape"
                                                            ></div>
                                                            <div class="top">
                                                                <img
                                                                    class="active"
                                                                    src="/images/icons/dashboards/banking/visa-text-white.svg"
                                                                    alt=""
                                                                />
                                                                <img
                                                                    class="light-image inactive"
                                                                    src="/images/icons/dashboards/banking/visa-text-dark.svg"
                                                                    alt=""
                                                                />
                                                                <img
                                                                    class="dark-image inactive"
                                                                    src="/images/icons/dashboards/banking/visa-text-white.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div class="bottom">
                                                                <span
                                                                    >$6,341.14</span
                                                                >
                                                                <span
                                                                    >**** ****
                                                                    ****
                                                                    4986</span
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--Carousel Item-->
                                                    <div
                                                        class="cards-carousel-item"
                                                        tabindex="0"
                                                        @keydown.space.prevent="
                                                            goto(1)
                                                        "
                                                        @click="goto(1)"
                                                    >
                                                        <div class="ccard">
                                                            <div
                                                                class="shape"
                                                            ></div>
                                                            <div class="top">
                                                                <img
                                                                    class="active"
                                                                    src="/images/icons/dashboards/banking/visa-text-white.svg"
                                                                    alt=""
                                                                />
                                                                <img
                                                                    class="light-image inactive"
                                                                    src="/images/icons/dashboards/banking/visa-text-dark.svg"
                                                                    alt=""
                                                                />
                                                                <img
                                                                    class="dark-image inactive"
                                                                    src="/images/icons/dashboards/banking/visa-text-white.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div class="bottom">
                                                                <span
                                                                    >$2,211.27</span
                                                                >
                                                                <span
                                                                    >**** ****
                                                                    ****
                                                                    3619</span
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--Carousel Item-->
                                                    <div
                                                        class="cards-carousel-item"
                                                        tabindex="0"
                                                        @keydown.space.prevent="
                                                            goto(2)
                                                        "
                                                        @click="goto(2)"
                                                    >
                                                        <div class="ccard">
                                                            <div
                                                                class="shape"
                                                            ></div>
                                                            <div class="top">
                                                                <img
                                                                    class="active"
                                                                    src="/images/icons/dashboards/banking/visa-text-white.svg"
                                                                    alt=""
                                                                />
                                                                <img
                                                                    class="light-image inactive"
                                                                    src="/images/icons/dashboards/banking/visa-text-dark.svg"
                                                                    alt=""
                                                                />
                                                                <img
                                                                    class="dark-image inactive"
                                                                    src="/images/icons/dashboards/banking/visa-text-white.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div class="bottom">
                                                                <span
                                                                    >$1,228.49</span
                                                                >
                                                                <span
                                                                    >**** ****
                                                                    ****
                                                                    5818</span
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--Carousel Item-->
                                                    <div
                                                        class="cards-carousel-item"
                                                        tabindex="0"
                                                        @keydown.space.prevent="
                                                            goto(3)
                                                        "
                                                        @click="goto(3)"
                                                    >
                                                        <div class="ccard">
                                                            <div
                                                                class="shape"
                                                            ></div>
                                                            <div class="top">
                                                                <img
                                                                    class="active"
                                                                    src="/images/icons/dashboards/banking/visa-text-white.svg"
                                                                    alt=""
                                                                />
                                                                <img
                                                                    class="light-image inactive"
                                                                    src="/images/icons/dashboards/banking/visa-text-dark.svg"
                                                                    alt=""
                                                                />
                                                                <img
                                                                    class="dark-image inactive"
                                                                    src="/images/icons/dashboards/banking/visa-text-white.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div class="bottom">
                                                                <span
                                                                    >$3,412,16</span
                                                                >
                                                                <span
                                                                    >**** ****
                                                                    ****
                                                                    7652</span
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column is-4">
                                    <!--Box-->
                                    <div class="inner-box">
                                        <div class="box-title">
                                            <h3>Balance</h3>
                                            <VField class="is-minimal-select">
                                                <VControl>
                                                    <Multiselect
                                                        v-model="valueSingle"
                                                        :options="optionsSingle"
                                                        placeholder="Select an option"
                                                        :max-height="145"
                                                    />
                                                </VControl>
                                            </VField>
                                        </div>

                                        <!--Balance-->
                                        <div class="card-balance-wrap">
                                            <div class="card-balance">
                                                <span>$6,341.14</span>
                                                <span>**** **** **** 4986</span>
                                            </div>
                                            <div class="card-balance-stats">
                                                <div class="card-balance-stat">
                                                    <div class="stat-title">
                                                        <span>Income</span>
                                                    </div>
                                                    <div class="stat-block">
                                                        <div
                                                            class="stat-icon is-up"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                aria-hidden="true"
                                                                role="img"
                                                                class="iconify iconify--feather"
                                                                width="1em"
                                                                height="1em"
                                                                preserveAspectRatio="xMidYMid meet"
                                                                viewBox="0 0 24 24"
                                                                data-icon="feather:arrow-right"
                                                            >
                                                                <path
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M5 12h14m-7-7l7 7l-7 7"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                        <div class="stat-text">
                                                            <span
                                                                >+
                                                                2,324.12</span
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-balance-stat">
                                                    <div class="stat-title">
                                                        <span>Expense</span>
                                                    </div>
                                                    <div class="stat-block">
                                                        <div
                                                            class="stat-icon is-down"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                aria-hidden="true"
                                                                role="img"
                                                                class="iconify iconify--feather"
                                                                width="1em"
                                                                height="1em"
                                                                preserveAspectRatio="xMidYMid meet"
                                                                viewBox="0 0 24 24"
                                                                data-icon="feather:arrow-right"
                                                            >
                                                                <path
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M5 12h14m-7-7l7 7l-7 7"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                        <div class="stat-text">
                                                            <span
                                                                >+ 518.41</span
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="dashboard-card is-card-panel is-grey">
                            <div class="columns is-gapless">
                                <div class="column is-8">
                                    <!--Box-->
                                    <div class="inner-box">
                                        <div class="box-title">
                                            <h3>Monthly Summary</h3>
                                        </div>

                                        <div class="columns">
                                            <!--Monthly Summary-->
                                            <div class="column is-4">
                                                <div
                                                    class="monthly-summary-wrap"
                                                >
                                                    <div
                                                        class="monthly-summary"
                                                    >
                                                        <div
                                                            class="monthly-summary-item"
                                                        >
                                                            <span>Income</span>
                                                            <span
                                                                class="is-income"
                                                                >+$5,000.00</span
                                                            >
                                                        </div>
                                                        <div
                                                            class="monthly-summary-item"
                                                        >
                                                            <span
                                                                >Expenses</span
                                                            >
                                                            <span
                                                                class="is-expense"
                                                                >-$263.19</span
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Chart-->
                                            <div class="column is-8">
                                                <div class="chart-wrapper">
                                                    <a
                                                        class="action-link"
                                                        tabindex="0"
                                                        >All Reports</a
                                                    >
                                                    <ApexChart
                                                        id="timeline-chart"
                                                        :height="
                                                            expensesOptions
                                                                .chart.height
                                                        "
                                                        :type="
                                                            expensesOptions
                                                                .chart.type
                                                        "
                                                        :series="
                                                            expensesOptions.series
                                                        "
                                                        :options="
                                                            expensesOptions
                                                        "
                                                    >
                                                    </ApexChart>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="column is-4">
                                    <!--Box-->
                                    <div class="inner-box">
                                        <div class="box-title">
                                            <h3>Transactions</h3>
                                            <a class="action-link" tabindex="0"
                                                >View All</a
                                            >
                                        </div>
                                        <!--Transactions-->
                                        <div class="transactions">
                                            <!--Transaction-->
                                            <VBlock
                                                title="Food Delivery"
                                                subtitle="Oct 23, 2020 - 8:46pm"
                                                center
                                                lighter
                                            >
                                                <template #icon>
                                                    <VIconBox
                                                        color="green"
                                                        rounded
                                                    >
                                                        <i
                                                            aria-hidden="true"
                                                            class="lnil lnil-service"
                                                        ></i>
                                                    </VIconBox>
                                                </template>
                                                <template #action>
                                                    <span class="dark-inverted"
                                                        >- $41.49</span
                                                    >
                                                </template>
                                            </VBlock>
                                            <!--Transaction-->
                                            <VBlock
                                                title="Market Earnings"
                                                subtitle="Oct 18, 2020 - 9:11am"
                                                center
                                                lighter
                                            >
                                                <template #icon>
                                                    <VIconBox
                                                        color="orange"
                                                        rounded
                                                    >
                                                        <i
                                                            aria-hidden="true"
                                                            class="lnil lnil-analytics-alt-1"
                                                        ></i>
                                                    </VIconBox>
                                                </template>
                                                <template #action>
                                                    <span class="dark-inverted"
                                                        >+ $263.39</span
                                                    >
                                                </template>
                                            </VBlock>
                                            <!--Transaction-->
                                            <VBlock
                                                title="Online Order"
                                                subtitle="Oct 16, 2020 - 2:13pm"
                                                center
                                                lighter
                                            >
                                                <template #icon>
                                                    <VIconBox
                                                        color="purple"
                                                        rounded
                                                    >
                                                        <i
                                                            aria-hidden="true"
                                                            class="lnil lnil-cart-alt"
                                                        ></i>
                                                    </VIconBox>
                                                </template>
                                                <template #action>
                                                    <span class="dark-inverted"
                                                        >- $92.00</span
                                                    >
                                                </template>
                                            </VBlock>
                                        </div>
                                        <div class="button-wrap">
                                            <VButton
                                                color="primary"
                                                fullwidth
                                                elevated
                                                >New</VButton
                                            >
                                            <VButton fullwidth
                                                >Settings</VButton
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../../scss/abstracts/all.scss";
@import "../../scss/main.scss";
@import "@vueform/multiselect/themes/default.css";
// @import 'tin';
.view-wrapper-p-full {
    margin-left: 320px !important;
    width: calc(100% - 320px) !important;
}
.banking-dashboard-v2 {
    .dashboard-card {
        @include vuero-s-card;

        &:not(:last-child) {
            margin-bottom: 1.5rem;
        }

        &.is-card-panel {
            &.is-grey {
                background: var(--widget-grey);
                border: none;
            }

            .columns {
                .column {
                    &:first-child {
                        .inner-box {
                            border-right: 1px solid var(--fade-grey-dark-3);
                        }
                    }
                }
            }

            .inner-box {
                position: relative;
                margin: 20px;
                height: calc(100% - 40px);

                &.has-bounds {
                    overflow: hidden;
                }

                .box-title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;

                    h3 {
                        font-family: var(--font-alt);
                        font-size: 1.1rem;
                        font-weight: 600;
                        color: var(--dark-text);
                    }

                    .field {
                        position: absolute;
                        top: -7px;
                        right: 0;
                        z-index: 5;
                        min-width: 135px;

                        .multiselect {
                            .multiselect-input {
                                .multiselect-single-label {
                                    color: var(--light-text);
                                }
                            }

                            .multiselect-options {
                                left: unset !important;
                                min-width: 180px;
                            }
                        }
                    }
                }

                .cards-wrapper {
                    display: flex;

                    .controls {
                        margin-right: 1.5rem;

                        .button {
                            .icon {
                                svg {
                                    height: 20px;
                                    width: 20px;
                                }
                            }
                        }
                    }

                    .cards-carousel {
                        max-width: 520px;

                        .tns-nav {
                            text-align: right;
                            position: absolute;
                            top: 0;
                            right: 15px;
                            height: auto;
                            max-height: 30px;
                            width: auto;

                            [aria-controls] {
                                width: 9px;
                                height: 9px;
                                padding: 0;
                                margin: 0 5px;
                                border-radius: var(--radius-rounded);
                                background: var(--medium-grey);
                                border: 0;

                                &.tns-nav-active {
                                    background: var(--primary);
                                }
                            }
                        }

                        .cards-carousel-inner {
                            margin-bottom: 0;

                            .cards-carousel-item {
                                padding: 0 1.25rem 0.75rem 0;
                                user-select: none;

                                &.tns-slide-active {
                                    .ccard {
                                        background-image: linear-gradient(
                                            -225deg,
                                            var(--primary-dark-8) 0%,
                                            var(--primary-dark-2) 48%,
                                            var(--primary-light-12) 100%
                                        );
                                        box-shadow: var(--primary-box-shadow);

                                        .shape {
                                            opacity: 0.15;
                                        }

                                        .top {
                                            img {
                                                &.active {
                                                    display: block;
                                                }

                                                &.inactive,
                                                &.inactive.light-image {
                                                    display: none !important;
                                                }
                                            }
                                        }

                                        .bottom {
                                            span {
                                                color: var(--smoke-white);
                                            }
                                        }
                                    }
                                }

                                .ccard {
                                    position: relative;
                                    display: flex;
                                    flex-direction: column;
                                    font-family: var(--font);
                                    width: 240px;
                                    height: 144px;
                                    border-radius: 14px;
                                    background: var(--fade-grey);
                                    padding: 18px;
                                    margin: 0 auto;
                                    overflow: hidden;
                                    transition: color 0.3s,
                                        background-color 0.3s, border-color 0.3s,
                                        height 0.3s, width 0.3s;

                                    .shape {
                                        position: absolute;
                                        bottom: -10px;
                                        right: -10px;
                                        height: 70px;
                                        width: 70px;
                                        background: var(--white);
                                        border-radius: var(--radius-rounded);
                                        opacity: 0;
                                        transition: opacity 0.3s;
                                    }

                                    .top {
                                        img {
                                            display: block;
                                            max-width: 35px;

                                            &.active {
                                                display: none;
                                            }

                                            &.inactive {
                                                display: block;
                                            }
                                        }
                                    }

                                    .bottom {
                                        margin-top: auto;

                                        span {
                                            display: block;
                                            color: var(--dark-text);

                                            &:first-child {
                                                font-weight: 600;
                                                font-size: 1.3rem;
                                            }

                                            &:nth-child(2) {
                                                font-size: 0.9rem;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .card-balance-wrap {
                    display: flex;
                    flex-direction: column;
                    height: calc(100% - 60px);

                    .card-balance {
                        span {
                            display: block;
                            color: var(--primary);

                            &:first-child {
                                font-weight: 700;
                                font-size: 2.4rem;
                            }

                            &:nth-child(2) {
                                font-size: 1rem;
                                font-weight: 500;
                            }
                        }
                    }

                    .card-balance-stats {
                        margin-top: auto;
                        display: flex;

                        .card-balance-stat {
                            width: 50%;
                            font-family: var(--font);

                            .stat-title {
                                color: var(--light-text);
                                margin-bottom: 6px;
                            }

                            .stat-block {
                                display: flex;
                                align-items: center;

                                .stat-icon {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    height: 30px;
                                    width: 30px;
                                    border-radius: var(--radius-rounded);
                                    background: var(--fade-grey-light-2);

                                    &.is-up {
                                        transform: rotate(-45deg);

                                        svg {
                                            color: var(--green);
                                        }
                                    }

                                    &.is-down {
                                        transform: rotate(45deg);

                                        svg {
                                            color: var(--red);
                                        }
                                    }

                                    svg {
                                        height: 16px;
                                        width: 16px;
                                        stroke-width: 3px;
                                    }
                                }

                                .stat-text {
                                    margin-left: 12px;
                                    font-family: var(--font);
                                    font-weight: 600;
                                    font-size: 1.1rem;
                                    color: var(--dark-text);
                                }
                            }
                        }
                    }
                }

                .monthly-summary-wrap {
                    .monthly-summary {
                        padding: 0 20px;
                        border: 1px solid var(--fade-grey-dark-5);
                        border-radius: var(--radius-large);

                        .monthly-summary-item {
                            padding: 20px 0;
                            font-family: var(--font);

                            &:first-child {
                                border-bottom: 1px solid var(--fade-grey-dark-5);
                            }

                            span {
                                display: block;

                                &:first-child {
                                    font-size: 0.85rem;
                                    font-weight: 500;
                                    color: var(--light-text);
                                }

                                &:nth-child(2) {
                                    font-weight: 500;

                                    &.is-income {
                                        color: var(--green);
                                    }

                                    &.is-expense {
                                        color: var(--red);
                                    }
                                }
                            }
                        }
                    }
                }

                .chart-wrapper {
                    position: relative;
                    padding-right: 30px;

                    .action-link {
                        position: absolute;
                        top: -42px;
                        right: 45px;
                    }
                }

                .transactions {
                    padding: 10px 0;

                    .media-flex-center {
                        .flex-meta {
                            span {
                                &:nth-child(2) {
                                    font-size: 0.85rem;
                                }
                            }
                        }

                        .flex-end {
                            font-family: var(--font);
                            font-size: 1rem;
                            font-weight: 500;
                            color: var(--dark-text);
                        }
                    }
                }

                .button-wrap {
                    display: flex;
                    justify-content: space-between;
                    padding: 20px 0 0;

                    .button {
                        max-width: 49%;
                    }
                }
            }
        }
    }
}

.is-dark {
    .banking-dashboard-v2 {
        .dashboard-card {
            @include vuero-card--dark;

            &.is-card-panel {
                background: var(--dark-sidebar-light-6);

                .inner-box {
                    border-color: var(--dark-sidebar-light-12) !important;

                    .box-title {
                        h3 {
                            color: var(--dark-dark-text);
                        }
                    }

                    .cards-carousel {
                        .tns-nav {
                            [aria-controls] {
                                background: var(--dark-sidebar-light-12);
                            }
                        }

                        .cards-carousel-inner {
                            .cards-carousel-item {
                                &.tns-slide-active {
                                    .ccard {
                                        background-image: linear-gradient(
                                            -225deg,
                                            var(--primary-dark-8) 0%,
                                            var(--primary-dark-2) 48%,
                                            var(--primary-light-12) 100%
                                        );
                                        box-shadow: var(--primary-box-shadow);

                                        .top {
                                            .inactive.dark-image {
                                                display: none !important;
                                            }
                                        }
                                    }
                                }

                                .ccard {
                                    background: var(--dark-sidebar-light-2);

                                    .top {
                                        .inactive.dark-image {
                                            display: block !important;
                                        }
                                    }

                                    .bottom {
                                        span {
                                            color: var(--dark-dark-text);
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .card-balance-wrap {
                        .card-balance {
                            span {
                                color: var(--primary);
                            }
                        }

                        .card-balance-stats {
                            .card-balance-stat {
                                .stat-block {
                                    .stat-icon {
                                        background: var(--dark-sidebar-light-2);
                                    }

                                    .stat-text {
                                        color: var(--dark-dark-text);
                                    }
                                }
                            }
                        }
                    }

                    .monthly-summary-wrap {
                        .monthly-summary {
                            border-color: var(--dark-sidebar-light-12);
                            background: var(--dark-sidebar-light-4);

                            .monthly-summary-item {
                                border-color: var(--dark-sidebar-light-12);
                            }
                        }
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 767px) {
    .banking-dashboard-v2 {
        .dashboard-card {
            &.is-card-panel {
                overflow: hidden;
                padding: 10px;

                .inner-box {
                    border-right: none !important;

                    .cards-wrapper {
                        position: relative;
                        margin-top: 30px;

                        .controls {
                            position: absolute;
                            top: -68px;
                            right: -8px;
                            margin-right: 0;
                        }
                    }

                    .card-balance-wrap {
                        .card-balance {
                            margin-bottom: 30px;
                        }
                    }

                    .monthly-summary-wrap {
                        margin-bottom: 60px;
                    }

                    .chart-wrapper {
                        padding-right: 0;

                        .action-link {
                            top: -45px;
                            right: 0;
                        }
                    }
                }
            }
        }

        .cards-carousel {
            .tns-nav {
                display: none !important;
            }
        }
    }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    .banking-dashboard-v2 {
        .dashboard-card {
            &.is-card-panel {
                .inner-box {
                    border-right: none !important;

                    .card-balance-wrap {
                        .card-balance {
                            margin-bottom: 30px;
                        }
                    }

                    .monthly-summary-wrap {
                        margin-bottom: 60px;
                    }

                    .chart-wrapper {
                        padding-right: 0;

                        .action-link {
                            top: -45px;
                            right: 0;
                        }
                    }
                }
            }
        }
    }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .banking-dashboard-v2 {
        .dashboard-card {
            &.is-card-panel {
                .inner-box {
                    .cards-carousel {
                        margin-left: 30px;
                        max-width: 400px !important;

                        .cards-carousel-inner {
                            .cards-carousel-item {
                                .ccard {
                                    width: 180px !important;
                                    height: 108px !important;
                                }
                            }
                        }
                    }

                    .card-balance-wrap {
                        .card-balance {
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
    }
}
@media (min-width: 1280px) {
    .vw-w {
        width: 1200px;
        margin: auto;
    }
}
</style>

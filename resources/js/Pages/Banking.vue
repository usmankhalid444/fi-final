<script setup lang="ts">
import ApexChart from "vue3-apexcharts";
import { incomeOptions } from "../data/incomingChartOne";
import VControl from "../Components/VControl.vue";
import VField from "../Components/VField.vue";
import VBlock from "../Components/VBlock.vue";
import VIconBox from "../Components/VIconBox.vue";
import Multiselect from "@vueform/multiselect";
import VAvatar from "../Components/VAvatar.vue";

import {
    selectSlotValue,
    selectSlotOptions,
    valueSingle,
    optionsSingle,
} from "../data/dashboardData";
import VProgress from "../Components/VProgress.vue";
// import SideBarLayout from '../Pages/layouts/sidebarLayout.vue'
import UserPopover from "../Components/popover/UserPopoverContent.vue";
// import { incomeOptions } from '../data/incomeHistoryChart'
import { popovers } from "../data/usersPopovers";
import { ref } from "vue";
const subSidebarVisible = ref(true);
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
                                $emit('usman', subSidebarVisible)
                        "
                    >
                        <span class="menu-toggle has-chevron"
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
                    </div>
                    <div class="title-wrap">
                        <h1 class="title is-4">Banking 1</h1>
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
                    <div class="banking-dashboard banking-dashboard-v1">
                        <div class="columns is-multiline">
                            <!--Credit Cards-->
                            <div class="column is-4">
                                <div class="dashboard-card is-credit-cards">
                                    <div class="title-wrap">
                                        <h3 class="dark-inverted">My Cards</h3>
                                        <button
                                            class="button is-circle is-dark-outlined"
                                        >
                                            <span class="icon is-small"
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

                                    <div class="card-block">
                                        <div
                                            class="card-block-inner is-dark-bordered-12"
                                        >
                                            <div class="credit-card is-theme-1">
                                                <div class="shape"></div>
                                                <div class="top">
                                                    <div class="card-number">
                                                        <span>** 4628</span>
                                                        <img
                                                            src="/images/icons/dashboards/banking/visa-squared-white.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="bottom">
                                                    <span>Credit Card</span>
                                                </div>
                                            </div>
                                            <div class="credit-card-meta">
                                                <span>Card Balance</span>
                                                <span class="dark-inverted"
                                                    >$2,834.31</span
                                                >
                                            </div>
                                            <div class="credit-card-end">
                                                <!--Dropdown-->
                                                <GraphDropdown />
                                            </div>
                                        </div>
                                        <div class="info-block-inner">
                                            <div class="title-wrap">
                                                <h3 class="dark-inverted">
                                                    Information
                                                </h3>
                                                <a
                                                    class="action-link"
                                                    tabindex="0"
                                                    >Edit</a
                                                >
                                            </div>
                                            <div class="info-block-line">
                                                <h4 class="dark-inverted">
                                                    Status
                                                </h4>
                                                <span>
                                                    <i
                                                        aria-hidden="true"
                                                        class="fas fa-circle text-success"
                                                    ></i>
                                                    Active
                                                </span>
                                            </div>
                                            <div class="info-block-line">
                                                <h4 class="dark-inverted">
                                                    Expires in
                                                </h4>
                                                <span>134 days</span>
                                            </div>
                                            <div class="info-block-line">
                                                <h4 class="dark-inverted">
                                                    Type
                                                </h4>
                                                <span class="has-image">
                                                    <img
                                                        src="/images/icons/dashboards/banking/visa-squared-color.svg"
                                                        alt=""
                                                    />
                                                    Credit card
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            class="card-block-inner is-dark-bordered-12"
                                        >
                                            <div class="credit-card is-theme-2">
                                                <div class="shape"></div>
                                                <div class="top">
                                                    <div class="card-number">
                                                        <span>** 2649</span>
                                                        <img
                                                            src="/images/icons/dashboards/banking/visa-squared-white.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="bottom">
                                                    <span>Debit Card</span>
                                                </div>
                                            </div>
                                            <div class="credit-card-meta">
                                                <span>Card Balance</span>
                                                <span class="dark-inverted"
                                                    >$10,563.18</span
                                                >
                                            </div>
                                            <div class="credit-card-end">
                                                <!--Dropdown-->
                                                <GraphDropdown />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="dashboard-card is-transactions">
                                    <div class="title-wrap">
                                        <h3 class="dark-inverted">
                                            Transactions
                                        </h3>
                                        <a class="action-link" tabindex="0"
                                            >View All</a
                                        >
                                    </div>

                                    <div class="transactions">
                                        <VBlock
                                            title="Food Delivery"
                                            subtitle="Oct 23, 2020 - 8:46pm"
                                            center
                                            lighter
                                        >
                                            <template #icon>
                                                <VIconBox color="green" rounded>
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
                                </div>
                            </div>

                            <div class="column is-8">
                                <div class="columns is-multiline">
                                    <div class="column is-6">
                                        <div class="dashboard-card">
                                            <div class="title-wrap">
                                                <h3 class="dark-inverted">
                                                    Quick Transfer
                                                </h3>
                                            </div>
                                            <VField
                                                class="is-image-select has-curved-images"
                                            >
                                                <VControl>
                                                    <Multiselect
                                                        v-model="
                                                            selectSlotValue
                                                        "
                                                        placeholder="Select a language"
                                                        label="name"
                                                        :max-height="145"
                                                        :options="
                                                            selectSlotOptions
                                                        "
                                                    >
                                                        <template
                                                            #singlelabel="{
                                                                value,
                                                            }"
                                                        >
                                                            <div
                                                                class="multiselect-single-label"
                                                            >
                                                                <img
                                                                    class="select-label-icon"
                                                                    :src="
                                                                        value.icon
                                                                    "
                                                                    alt=""
                                                                />
                                                                <span
                                                                    class="select-label-text"
                                                                >
                                                                    {{
                                                                        value.name
                                                                    }}
                                                                </span>
                                                            </div>
                                                        </template>
                                                        <template
                                                            #option="{ option }"
                                                        >
                                                            <img
                                                                class="select-option-icon"
                                                                :src="
                                                                    option.icon
                                                                "
                                                                alt=""
                                                            />
                                                            <span
                                                                class="select-label-text"
                                                            >
                                                                {{
                                                                    option.name
                                                                }}
                                                            </span>
                                                        </template>
                                                    </Multiselect>
                                                </VControl>
                                            </VField>

                                            <p class="context-text">
                                                Select one of your bank accounts
                                                to transfer some funds. The
                                                transfer cannot exceed 20% of
                                                your balance.
                                            </p>
                                            <div class="level is-mobile">
                                                <div class="level-left"></div>
                                                <div class="level-right">
                                                    <div class="level-item">
                                                        <a
                                                            class="action-link"
                                                            tabindex="0"
                                                            >Confirm</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="dashboard-card"
                                            data-toggle="popover"
                                            data-pop-mode="hover"
                                            data-pop-width="220"
                                            data-pop-title="Level 3"
                                            data-pop-content="Awesome! You're already a level 3 customer. Keep up for more."
                                            data-pop-position="auto"
                                            data-pop-icon="lnil lnil-crown-alt-1"
                                            data-pop-iconbg="green"
                                        >
                                            <div class="title-wrap">
                                                <h3 class="dark-inverted">
                                                    Overall Progress
                                                </h3>
                                                <span
                                                    class="title-meta dark-inverted"
                                                    >Lvl 3</span
                                                >
                                            </div>

                                            <div
                                                class="progress-wrap m-b-10 m-t-10"
                                            >
                                                <VProgress
                                                    size="tiny"
                                                    :value="65"
                                                />
                                            </div>
                                            <p class="context-text">
                                                This is your Vuero customer
                                                level. Reach out higher levels
                                                to unlock achievements, special
                                                gifts, and more.
                                            </p>
                                            <div class="level is-mobile">
                                                <div class="level-left"></div>
                                                <div class="level-right">
                                                    <div class="level-item">
                                                        <a
                                                            class="action-link"
                                                            tabindex="0"
                                                            >Details</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="column is-6">
                                        <div class="dashboard-card is-contacts">
                                            <div class="title-wrap">
                                                <h3 class="dark-inverted">
                                                    Send Money To
                                                </h3>
                                            </div>

                                            <div class="people-wrap">
                                                <div class="people">
                                                    <div>
                                                        <Tippy
                                                            class="has-help-cursor"
                                                            interactive
                                                            :offset="[0, 10]"
                                                            placement="bottom-end"
                                                        >
                                                            <VAvatar
                                                                color="warning"
                                                                initials="BT"
                                                                size="small"
                                                            />
                                                            <template #content>
                                                                <UserPopoverContent
                                                                    :user="
                                                                        popovers.user122
                                                                    "
                                                                />
                                                            </template>
                                                        </Tippy>
                                                    </div>

                                                    <div>
                                                        <Tippy
                                                            class="has-help-cursor"
                                                            interactive
                                                            :offset="[0, 10]"
                                                            placement="bottom-end"
                                                        >
                                                            <VAvatar
                                                                picture="/demo/avatars/18.jpg"
                                                                size="small"
                                                            />
                                                            <template #content>
                                                                <UserPopoverContent
                                                                    :user="
                                                                        popovers.user18
                                                                    "
                                                                />
                                                            </template>
                                                        </Tippy>
                                                    </div>

                                                    <div>
                                                        <Tippy
                                                            class="has-help-cursor"
                                                            interactive
                                                            :offset="[0, 10]"
                                                            placement="bottom-end"
                                                        >
                                                            <VAvatar
                                                                color="info"
                                                                initials="JD"
                                                                size="small"
                                                            />
                                                            <template #content>
                                                                <UserPopoverContent
                                                                    :user="
                                                                        popovers.user123
                                                                    "
                                                                />
                                                            </template>
                                                        </Tippy>
                                                    </div>

                                                    <div>
                                                        <Tippy
                                                            class="has-help-cursor"
                                                            interactive
                                                            :offset="[0, 10]"
                                                            placement="bottom-end"
                                                        >
                                                            <VAvatar
                                                                picture="/demo/avatars/7.jpg"
                                                                size="small"
                                                            />
                                                            <template #content>
                                                                <UserPopoverContent
                                                                    :user="
                                                                        popovers.user7
                                                                    "
                                                                />
                                                            </template>
                                                        </Tippy>
                                                    </div>
                                                </div>
                                                <div class="actions">
                                                    <span
                                                        >See all Contacts</span
                                                    >
                                                    <a
                                                        class="is-dark-primary-hover"
                                                    >
                                                        <i
                                                            aria-hidden="true"
                                                            class="iconify"
                                                            data-icon="feather:arrow-right"
                                                        />
                                                    </a>
                                                </div>
                                            </div>

                                            <div class="transfer-form">
                                                <VField
                                                    class="is-image-select has-curved-images"
                                                >
                                                    <VControl>
                                                        <Multiselect
                                                            v-model="
                                                                selectSlotValue
                                                            "
                                                            placeholder="Select a language"
                                                            label="name"
                                                            :max-height="145"
                                                            :options="
                                                                selectSlotOptions
                                                            "
                                                        >
                                                            <template
                                                                #singlelabel="{
                                                                    value,
                                                                }"
                                                            >
                                                                <div
                                                                    class="multiselect-single-label"
                                                                >
                                                                    <img
                                                                        class="select-label-icon"
                                                                        :src="
                                                                            value.icon
                                                                        "
                                                                        alt=""
                                                                    />
                                                                    <span
                                                                        class="select-label-text"
                                                                    >
                                                                        {{
                                                                            value.name
                                                                        }}
                                                                    </span>
                                                                </div>
                                                            </template>
                                                            <template
                                                                #option="{
                                                                    option,
                                                                }"
                                                            >
                                                                <img
                                                                    class="select-option-icon"
                                                                    :src="
                                                                        option.icon
                                                                    "
                                                                    alt=""
                                                                />
                                                                <span
                                                                    class="select-label-text"
                                                                >
                                                                    {{
                                                                        option.name
                                                                    }}
                                                                </span>
                                                            </template>
                                                        </Multiselect>
                                                    </VControl>
                                                </VField>

                                                <div class="field">
                                                    <label>Amount</label>
                                                    <div
                                                        class="field has-addons"
                                                    >
                                                        <div class="control">
                                                            <span
                                                                class="select currency-select"
                                                            >
                                                                <select>
                                                                    <option>
                                                                        $
                                                                    </option>
                                                                    <option>
                                                                        £
                                                                    </option>
                                                                    <option>
                                                                        €
                                                                    </option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div
                                                            class="control is-expanded"
                                                        >
                                                            <input
                                                                class="input"
                                                                type="text"
                                                                placeholder="Amount of money"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <p class="context-text">
                                                    Funds will reach destination
                                                    tomorrow.
                                                </p>

                                                <div class="submit-wrap">
                                                    <button
                                                        class="button button v-button is-bold is-big is-fullwidth is-raised is-primary"
                                                    >
                                                        Send Money
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="column is-12">
                                        <div class="dashboard-card is-income">
                                            <VField class="is-minimal-select">
                                                <VControl>
                                                    <Multiselect
                                                        v-model="valueSingle"
                                                        :options="[]"
                                                        placeholder="Select an option"
                                                        :max-height="145"
                                                    />
                                                </VControl>
                                            </VField>

                                            <ApexChart
                                                id="income-chart"
                                                :height="
                                                    incomeOptions.chart.height
                                                "
                                                :type="incomeOptions.chart.type"
                                                :series="incomeOptions.series"
                                                :options="incomeOptions"
                                            >
                                            </ApexChart>
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

.view-wrapper-p-full {
    margin-left: 320px !important;
    width: calc(100% - 320px) !important;
}

.banking-dashboard-v1 {
    .columns {
        .column {
            height: fit-content;
        }
    }

    .dashboard-card {
        @include vuero-s-card;

        &:not(:last-child) {
            margin-bottom: 1.5rem;
        }

        &.is-credit-cards {
            padding: 0;

            .title-wrap {
                padding: 20px 20px 10px;
                margin-bottom: 0;
            }

            .card-block {
                .card-block-inner {
                    display: flex;
                    align-items: center;
                    padding: 20px;

                    &:not(:first-child) {
                        border-top: 1.6px dashed var(--fade-grey-dark-4);
                    }

                    .credit-card {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 80px;
                        width: 120px;
                        min-width: 120px;
                        background: var(--fade-grey);
                        border-radius: 10px;
                        padding: 6px 10px 8px;
                        overflow: hidden;

                        &.is-theme-1 {
                            background: var(--primary);
                            box-shadow: var(--primary-box-shadow);
                        }

                        &.is-theme-2 {
                            background: var(--info);
                            box-shadow: var(--info-box-shadow);
                        }

                        .top {
                            .card-number {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;

                                span {
                                    font-family: var(--font);
                                    font-size: 0.8rem;
                                    font-weight: 500;
                                    color: var(--smoke-white);
                                    display: block;
                                }

                                img {
                                    display: block;
                                    width: 100%;
                                    max-width: 28px;
                                }
                            }
                        }

                        .bottom {
                            font-family: var(--font);
                            font-size: 0.7rem;
                            font-weight: 500;
                            color: var(--smoke-white);
                        }

                        .shape {
                            position: absolute;
                            bottom: -10px;
                            right: -10px;
                            height: 46px;
                            width: 46px;
                            background: var(--white);
                            border-radius: var(--radius-rounded);
                            opacity: 0.15;
                        }
                    }

                    .credit-card-meta {
                        margin-left: 16px;

                        span {
                            display: block;
                            font-family: var(--font);

                            &:first-child {
                                font-size: 0.9rem;
                                color: var(--light-text);
                            }

                            &:nth-child(2) {
                                color: var(--dark-text);
                                font-size: 1.6rem;
                                font-weight: 600;
                                line-height: 1.2;
                            }
                        }
                    }

                    .credit-card-end {
                        margin-left: auto;
                    }
                }

                .info-block-inner {
                    padding: 10px 20px 20px;

                    .title-wrap {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0;
                        margin-bottom: 12px;

                        h3 {
                            font-size: 1rem;
                            color: var(--dark-text);
                            font-weight: 500;
                        }

                        .action-link {
                            font-size: 0.9rem;
                        }
                    }

                    .info-block-line {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 6px 0;

                        h4 {
                            font-family: var(--font);
                            font-weight: 500;
                            color: var(--dark-text);
                            font-size: 0.9rem;
                            line-height: 2;
                        }

                        span {
                            color: var(--light-text);
                            font-size: 0.9rem;

                            &.has-image {
                                display: flex;
                                justify-content: flex-end;
                                align-items: center;
                                flex-grow: 2;

                                img {
                                    max-width: 28px;
                                    margin-right: 6px;
                                }
                            }

                            i {
                                position: relative;
                                top: 0;
                                font-size: 10px;
                                margin-right: 8px;
                            }
                        }
                    }
                }
            }
        }

        &.is-contacts {
            display: flex;
            flex-direction: column;
            height: 372px;

            .people-wrap {
                .people {
                    display: flex;
                    padding: 10px 0;

                    .v-avatar {
                        margin: 0 4px;
                    }
                }

                .actions {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-family: var(--font);
                    padding: 0 4px;

                    span {
                        font-size: 0.9rem;
                        color: var(--light-text);
                    }

                    a {
                        color: var(--light-text);

                        &:hover,
                        &:focus {
                            color: var(--primary);
                        }

                        svg {
                            height: 16px;
                            width: 16px;
                        }
                    }
                }
            }

            .transfer-form {
                margin-top: auto;
            }
        }

        &.is-transactions {
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
        }

        &.is-income {
            position: relative;

            .field {
                position: absolute;
                top: 12px;
                right: 16px;
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

        > .title-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
            font-family: var(--font);

            h3 {
                font-family: var(--font-alt);
                font-size: 1rem;
                font-weight: 600;
                color: var(--dark-text);
            }

            .title-meta {
                font-size: 1rem;
                font-weight: 500;
                color: var(--dark-text);
            }

            .action-link {
                font-size: 0.9rem;
            }
        }

        .context-text {
            font-size: 0.9rem;
            margin-bottom: 10px;
        }
    }
}

.is-dark {
    .banking-dashboard-v1 {
        .dashboard-card {
            @include vuero-card--dark;
        }
    }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .banking-dashboard-v1 {
        .dashboard-card {
            &.is-credit-cards {
                .card-block {
                    .card-block-inner {
                        .credit-card {
                            height: 67px;
                            width: 100px;
                            min-width: 100px;
                        }

                        .credit-card-meta {
                            span {
                                &:nth-child(2) {
                                    font-size: 1.3rem;
                                }
                            }
                        }
                    }
                }
            }

            &.is-contacts {
                height: 400px;
            }

            .context-text {
                font-size: 0.8rem;
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

<script setup>
import { ref } from 'vue'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

import BackgroundDesktop from './components/background/desktop.vue'
import BackgroundMobile from './components/background/mobile.vue'
import Star from './components/icon/star.vue'
import Plus from './components/icon/plus.vue'
import Minus from './components/icon/minus.vue'

const faqs = ref([
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
])
</script>

<template>
  <BackgroundDesktop class=" background max-lg:hidden h-fit" />
  <BackgroundMobile class="background lg:hidden" />
  <section class="flex justify-center w-full absolute top-1/4 lg:top-1/3 max-lg:px-4 lg:pb-12">
    <div class=" bg-white pt-8 pb-4 px-4 rounded-2xl max-w-2xl w-full">
      <div class="flex items-center gap-6">
        <Star />
        <h1 class="font-bold text-4xl text-theme-darkPurple">FAQs</h1>
      </div>
      <div class="py-4 border-b border-theme-pink" v-for="faq in faqs">
        <Disclosure v-slot="{ open }" as="div" class="">
          <DisclosureButton class="flex items-center justify-between text-theme-darkPurple font-semibold w-full">
            <span>{{ faq.question }}</span>
            <div class="relative">
              <Transition name="icon" mode="out-in" class="relative">
                <Minus class="absolute " v-if="open" />
                <Plus class="absolute" v-else />
              </Transition>
            </div>
          </DisclosureButton>
          <transition enter-active-class="transition duration-500 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <DisclosurePanel class="text-theme-darkPurple">
              {{ faq.answer }}
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background {
  @apply w-full bg-theme-darkPurple;
}

.icon-enter-active,
.icon-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.icon-enter-from,
.icon-leave-to {
  opacity: 0.5;
  transform: rotate(270deg);
}
</style>
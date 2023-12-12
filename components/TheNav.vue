<template>
  <NavigationMenuRoot class="w-full py-4 px-4">
    <!-- list  -->
    <NavigationMenuList class="flex justify-between">
      <NavigationMenuItem class="">
        <!-- Logo  -->
        <NuxtLink to="/" class="flex items-center">
          <Icon
            class="w-10 h-10 text-secondary font-bold pr-1"
            name="arcticons:quranic"
          />
          <h1>
            <span class="font-bold text-primary">Learn</span>
            <span class="font-light text-secondary">Quran</span>
          </h1>
        </NuxtLink>
      </NavigationMenuItem>
      <NavigationMenuItem class="">
        <Icon
          class="text-4xl text-secondary font-bold"
          name="material-symbols-light:menu"
        />
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>

<script setup></script>

<style scoped></style>

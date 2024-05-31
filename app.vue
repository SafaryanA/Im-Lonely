<script lang="ts" setup>
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `I\'m Lonely - ${titleChunk}` : 'I\'m Lonely';
	}
})
</script>
<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>



<style lang="scss">

</style>

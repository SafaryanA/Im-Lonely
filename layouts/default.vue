<template>
	<div class="overlay__body">
<!--		.l-->
		<span class="top__circle circle"></span>
		<span class="bottom__circle circle"></span>
		<div class="main__body">
			<slot/>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.top__circle {
	width: 302px;
	height: 302px;
	background: rgb(83, 0, 97);
	background: linear-gradient(180deg, rgba(83, 0, 97, 1) 0%, rgba(13, 10, 48, 1) 100%);
	top: 6%;
	right: 23.9%;
}

.bottom__circle[data-v-433a9abd] {
	width: 220px;
	height: 220px;
	right: 31px;
	bottom: 6.5%;
	background: rgb(48, 0, 97);
	background: linear-gradient(147deg, rgb(48, 0, 97) 0%, rgb(10, 16, 48) 100%);
}

.circle {
	border-radius: 50%;
	position: absolute;
	display: block;
}

</style>
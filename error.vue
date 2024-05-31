<template>
	<div>
		<nuxt-layout :name="layout">
			<div class="prose">
				<template v-if="error?.statusCode === 404">
					<h1 class="err_status">{{ error?.statusCode }}</h1>
					<p class="err_message">Sorry, that page doesn't exist.</p>
				</template>
				<template v-else>
					<h1 class="err_status">Dang</h1>
					<p>
						<strong class="err_message">{{ error?.message }}</strong>
					</p>
					<p class="err_message">It looks like something broke.</p>
					<p class="err_message">Sorry about that.</p>
				</template>
					<a class="btn btn_redirect" @click="handleError">
						Go back to your Login.
					</a>
			</div>
		</nuxt-layout>
	
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const layout = 'error-layout'

useHead( {
	title: 'Error',
} )
defineProps({
	error: Object as () => NuxtError
})

const handleError = () => {
	clearError( {
		redirect: '/login',
	} );
};
</script>

<style scoped lang="scss">
.btn_redirect {
	display: inline-block;
	background: rgb(98, 142, 255);
	background: linear-gradient(56deg, rgba(98, 142, 255, 1) 0%, rgba(135, 64, 205, 1) 53%, rgba(88, 4, 117, 1) 100%);
	padding: 15px 20px;
	margin-top: 20px;
	
	&:hover {
		animation: anim_login_btn 300ms ease-in forwards;
	}
}
</style>
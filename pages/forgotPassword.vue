<script setup lang="ts">
import { emailOrPhone, emailOrPhoneAttrs, onSubmit } from '~/logic/userLogSigFPass'

useHead( {
	title: `Forgot Password`,
} )

</script>
<template>
	<div class="entrance__user">
		<div class="entrance__context">
			<h3 class="entrance__text">No Worries.!!</h3>
			<div class="wrapper__button">
				<button>Take me back.!</button>
				<span></span>
			</div>
		</div>
		<div class="form__wrapper">
			<div class="form-container">
				<div class="form__inner">
					<form class="login__form" @submit.prevent="onSubmit">
						<h4 class="page__title">Forgot Password ?</h4>
						<p class="page__slogan">Please enter you’re email</p>
						<label class="login__label">
							<input v-model="emailOrPhone" v-bind="emailOrPhoneAttrs" class="login__input" type="text"
							       placeholder="example@mail.com">
						</label>
						<!--						<span>{{ errors.email }}</span>-->
						<button class="fgtPass__button btn" type="submit">Reset Password</button>
					</form>
					<div class="wrapper__button_line">
						<nuxt-link class="Sign_Up">Don’t have an account ? Signup</nuxt-link>
						<div class="bottom__line">
							<div class="inner__bottom__line">
								<nuxt-link>Terms & Conditions</nuxt-link>
								<nuxt-link>Support</nuxt-link>
								<nuxt-link>Customer Care</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
.wrapper__button button {
	margin-left: 8px;
}

.login__form {
	.login__label {
		margin: 13px 0;
	}
	
	.login__button {
		margin-top: 12px;
	}
	
}

.fgtPass__button {
	background: rgb(233, 72, 197);
	background: linear-gradient(87deg, rgba(233, 72, 197, 1) 0%, rgba(205, 64, 123, 1) 53%, rgba(117, 4, 45, 1) 100%);
	
	&:hover {
		animation: anim_login_btn 300ms ease-in forwards;
	}
}

@keyframes anim_login_btn {
	from {
		color: var(--text_color);
		background: rgb(233, 72, 197);
		background: linear-gradient(87deg, rgba(233, 72, 197, 1) 0%, rgba(205, 64, 123, 1) 53%, rgba(117, 4, 45, 1) 100%);
	}
	to {
		color: var(--accents);
		background: rgb(233, 72, 197);
		background: linear-gradient(87deg, rgba(233, 72, 197, 1) 0%, rgba(98, 3, 38, 1) 50%, rgba(205, 64, 123, 1) 100%);
	}
	
}
</style>
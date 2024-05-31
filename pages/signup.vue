<script setup lang="ts">
import IconGoogle from '~/assets/icons/icon_google.svg';
import IconFacebook from '~/assets/icons/icon_facebook.svg';
import IconGithub from '~/assets/icons/icon_github.svg'

import {
	name,
	nameAttrs,
	emailOrPhone,
	emailOrPhoneAttrs,
	password,
	passwordAttrs,
	confirmPassword,
	confirmPasswordAttrs,
	onSubmit
} from '~/logic/userLogSigFPass'

useHead( {
	title: 'Signup',
} )

</script>
<template>
	<div class="entrance__user">
		<div class="entrance__context">
			<h3 class="entrance__text">Roll the Carpet.!</h3>
			<div class="wrapper__button">
				<button>Skip the lag ?</button>
				<span></span>
			</div>
		</div>
		<div class="form__wrapper">
			<div class="form-container">
				<div class="form__inner">
					<form action="" class="login__form" @submit.prevent="onSubmit">
						<h4 class="page__title">Signup</h4>
						<p class="page__slogan">Just some details to get you in.!</p>
						<label class="login__label">
							<input v-model="name" v-bind="nameAttrs" class="login__input" type="text" placeholder="Username">
						</label>
						<!--						<span>{{ errors.name }}</span>-->
						<label class="login__label">
							<input v-model="emailOrPhone" v-bind="emailOrPhoneAttrs" class="login__input" type="text"
							       placeholder="Email / Phone">
						</label>
						<!--						<span>{{ errors.emailOrPhone }}</span>-->
						<label class="login__label">
							<input v-model="password" v-bind="passwordAttrs" class="login__input" type="password"
							       placeholder="Password">
						</label>
						<!--						<span>{{ errors.password }}</span>-->
						<label class="login__label">
							<input v-model="confirmPassword" v-bind="confirmPasswordAttrs" class="login__input" type="password"
							       placeholder="Confirm Password">
						</label>
						<!--						<span>{{ errors.confirmPassword }}</span>-->
						<button class="signup__button btn" type="submit">Signup</button>
						<div class="login__design">
							<span class="line left__line"></span>
							<span class="line__text">Or</span>
							<span class="line right__line"></span>
						</div>
						<div class="wrapper__login_icon">
							<nuxt-link to="#">
								<IconGoogle class=" login_icon" :filled="true"/>
							</nuxt-link>
							<nuxt-link to="#">
								<IconFacebook class=" login_icon" :filled="true"/>
							</nuxt-link>
							<nuxt-link to="#">
								<IconGithub class="login_icon" :filled="true"/>
							</nuxt-link>
						</div>
					</form>
					<div class="wrapper__button_line">
						<nuxt-link class="Sign_Up">Already Registered? Login</nuxt-link>
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
		
		&:last-of-type {
			margin-top: -2px;
		}
	}
	
	.login__button {
		margin-top: 12px;
	}
	
}

.signup__button {
	background: rgb(46, 76, 238);
	background: linear-gradient(87deg, rgba(46, 76, 238, 1) 0%, rgba(34, 30, 191, 1) 53%, rgba(4, 15, 117, 1) 100%);
	
	&:hover {
		animation: anim_login_btn 300ms ease-in forwards;
	}
}

@keyframes anim_login_btn {
	from {
		color: var(--text_color);
		background: rgb(46, 76, 238);
		background: linear-gradient(87deg, rgba(46, 76, 238, 1) 0%, rgba(34, 30, 191, 1) 53%, rgba(4, 15, 117, 1) 100%);
	}
	to {
		color: var(--accents);
		background: rgb(46, 76, 238);
		background: linear-gradient(87deg, rgba(46, 76, 238, 1) 0%, rgba(0, 5, 56, 1) 50%, rgba(34, 30, 191, 1) 100%);
	}
}

.login__design {
	margin-top: 15px;
}
</style>
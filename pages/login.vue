<script setup lang="ts">
import IconGoogle from '~/assets/icons/icon_google.svg';
import IconFacebook from '~/assets/icons/icon_facebook.svg';
import IconGithub from '~/assets/icons/icon_github.svg'
import ClosedEye from '~/assets/icons/closed_eye.svg'
import { emailOrPhone, emailOrPhoneAttrs, password, passwordAttrs, errors, onSubmit } from '~/logic/userLogSigFPass'

useHead( {
	title: 'Login'
} )

</script>
<template>
	<div class="entrance__user">
		<div class="entrance__context">
			<h3 class="entrance__text">Welcome Back .!</h3>
			<div class="wrapper__button">
				<button>Skip the lag ?</button>
				<span></span>
			</div>
		</div>
		<div class="form__wrapper">
			<div class="form-container">
				<div class="form__inner">
					<NuxtErrorBoundary>
						<form action="" class="login__form"><h4 class="page__title" @submit.prevent="onSubmit">Login</h4>
							<p class="page__slogan">Glad you’re back.!</p>
							<label class="login__label"><input v-model="emailOrPhone" v-bind="emailOrPhoneAttrs" class="login__input"
							                                   type="text"
							                                   placeholder="Phone/Email"></label>
							<!--							<span>{{ errors.email }}</span>-->
							
							<label class="login__label">
								
								<button type="button" class="btn__passw__eye">
									<ClosedEye class=" btn__passw__ico" :filled="true"/>
								</button>
								<input v-model="password" v-bind="passwordAttrs" class="login__input" type="password"
								       placeholder="Password">
							</label>
							<!--							<span>{{ errors.email }}</span>-->
							
							<label class="label_checkbox"><input class="login__checkbox" type="checkbox"><span
									class="custom_checkbox"></span> <span class="text_checkbox">Remember me</span></label>
							<!--							<span>{{ errors.email }}</span>-->
							
							<button class="login__button btn" type="submit">Login</button>
							<a href="#" class="forgot__password">Forgot password ?</a>
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
							<nuxt-link class="Sign_Up">Don't have an account ? Signup</nuxt-link>
							<div class="bottom__line">
								<div class="inner__bottom__line">
									
									<nuxt-link>Terms & Conditions</nuxt-link>
									<nuxt-link>Support</nuxt-link>
									<nuxt-link>Customer Care</nuxt-link>
								</div>
							</div>
						</div>
					</NuxtErrorBoundary>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped lang="scss">
.wrapper__button button {
	margin-left: 18px;
}

.login__form {
	.login__label {
		margin: 13px 0;
	}
	
	.login__button {
		margin-top: 24px;
	}
}

.login__button {
	background: rgb(98, 142, 255);
	background: linear-gradient(56deg, rgba(98, 142, 255, 1) 0%, rgba(135, 64, 205, 1) 53%, rgba(88, 4, 117, 1) 100%);
	
	&:hover {
		animation: anim_login_btn 300ms ease-in forwards;
	}
}

@keyframes anim_login_btn {
	from {
		color: var(--text_color);
		background: rgb(98, 142, 255);
		background: linear-gradient(56deg, rgba(98, 142, 255, 1) 0%, rgba(135, 64, 205, 1) 53%, rgba(88, 4, 117, 1) 100%);
	}
	to {
		color: var(--accents);
		background: rgb(98, 142, 255);
		background: linear-gradient(56deg, rgba(98, 142, 255, 1) 0%, rgba(205, 64, 122, 1) 50%, rgba(88, 4, 117, 1) 100%);
	}
}

.login__design {
	margin-top: 45px;
}
</style>
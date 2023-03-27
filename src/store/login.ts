import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
	state: (): any => ({
		// userName: JSON.parse(sessionStorage.getItem('userName') ?? '') || 'CQUPT',
		// userGrade: JSON.parse(sessionStorage.getItem('userGrade') ?? '') || '二年级'
		userName: 'CQUPT',
		userGrade:  '二年级'
	}),

	getters: {},

	actions: {
		// mutation 现在可以成为 action 了，不再用 `state` 作为第一个参数，而是用 `this`。
		// updateUser (payload) {
		//   this.firstName = payload.firstName
		//   this.lastName = payload.lastName
		//   this.userId = payload.userId
		// },
		UP_USER_NAME(userName: any) {
			this.userName = userName
			sessionStorage.setItem('userName', JSON.stringify(this.userName))
		},
		UP_USER_GRADE(userGrade: any) {
			this.userGrade = userGrade
			sessionStorage.setItem('userGrade', JSON.stringify(this.userGrade))
		}
	}
})

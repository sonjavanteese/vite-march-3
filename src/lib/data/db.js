import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const logIn = async (email, password) => {
	try {
		let {
			user,
			error
		} = await supabase.auth.signIn({
			email,
			password
		})
		if (user) {
			console.log("Login Succeed!");
			return user;
		}
		return user;
	} catch (error) {
		console.error(error)
	}
};


export const logOut = async () => {
	try {
		let { error } = await supabase.auth.signOut();
		if (!error) {
			console.log("logout success")
			return 'Logout Success!'
		}
	} catch (error) {
		console.error(error);
	}
};



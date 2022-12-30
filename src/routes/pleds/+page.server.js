import { redirect } from '@sveltejs/kit';

export function load({locals}) {
  if(!locals.user.website || !locals.user.website.split(",").includes('pleds')){
    throw redirect(307, '/');
  }
}


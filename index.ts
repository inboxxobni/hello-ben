import type { Context } from '@deepseek-ai/cordis'
import { Acryl } from 'acrylblends'

export const name = 'hello-ben'
export const inject = ['router', 'home']

/** ben's workshop plugin: a greeting route and a widget on the home page. */
export function apply(ctx: Context): void {
  ctx.router.route('/hello-ben', new Acryl().get('/', (c) => c.json({ from: 'ben', says: 'hello from the workshop' })))
  ctx.effect(() =>
    ctx.home.widget({ id: 'hello-ben', title: 'Hello from ben', render: () => '<p>Hello from ben</p>' }),
  )
}

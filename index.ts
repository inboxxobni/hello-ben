import type { Context } from '@deepseek-ai/cordis'
import { Acryl } from 'acrylblends'
export const name = 'hello-ben'
export const inject = ['router']
export function apply(ctx: Context): void {
  ctx.router.route('/hello-ben', new Acryl().get('/', (c) => c.json({ from: 'ben' })))
}

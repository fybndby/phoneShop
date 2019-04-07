import swiper from './swiper'
export default {
    inserted(el, binding, vnode) {
        swiper(el, vnode.context);
        console.log(el);
        console.log(vnode)
    }
}
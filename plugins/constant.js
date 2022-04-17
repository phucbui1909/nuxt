import modals from '@/constants/modal';
export default ({ app }, inject) => {  
  inject('modalName', modals)
}
import { defineComponent, ref, mergeProps, useSSRContext, computed, watch } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
const _imports_0$2 = publicAssetsURL("/images/icon-add-to-cart.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DesertCard",
  __ssrInlineRender: true,
  props: {
    dessert: {}
  },
  emits: ["add-to-cart", "remove-from-cart"],
  setup(__props, { emit: __emit }) {
    const quantity = ref(1);
    const inCart = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl overflow-hidden relative flex flex-col" }, _attrs))}><div class="relative flex-grow"><img${ssrRenderAttr("src", (_a = _ctx.dessert) == null ? void 0 : _a.image)}${ssrRenderAttr("alt", _ctx.dessert.name)} class="${ssrRenderClass([{ "border-4 border-orange-600": inCart.value }, "w-full rounded-2xl h-72 object-cover"])}"></div>`);
      if (!inCart.value) {
        _push(`<div class="group w-[70%] justify-center text-sm z-10 py-3 px-3 shadow-md hover:border bg-white text-black font-bold rounded-full hover:border-orange-600 flex items-center self-center -mt-5"><img${ssrRenderAttr("src", _imports_0$2)} alt="Add to Cart" class="mr-3"><span class="group-hover:text-orange-600 cursor-pointer">Add to Cart</span></div>`);
      } else {
        _push(`<div class="${ssrRenderClass([{ "border-2 border-orange-600": inCart.value }, "flex items-center z-10 justify-between w-[70%] py-3 px-3 shadow-md bg-white text-black font-bold rounded-full self-center -mt-5"])}"><button class="text-lg cursor-pointer border border-orange-600 bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center"> - </button><span class="text-sm">${ssrInterpolate(quantity.value)}</span><button class="text-lg cursor-pointer border border-orange-600 bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center"> + </button></div>`);
      }
      _push(`<div class="p-4 mt-5 text-left"><h2 class="text-xs text-gray-600 font-light mb-1">${ssrInterpolate(_ctx.dessert.name)}</h2><p class="text-base font-semibold mb-1">${ssrInterpolate(_ctx.dessert.desc)}</p><p class="text-orange-600 font-bold text-sm">$${ssrInterpolate(_ctx.dessert.price)}.00</p></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesertCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0$1 = publicAssetsURL("/images/illustration-empty-cart.svg");
const _imports_1 = publicAssetsURL("/images/icon-remove-item.svg");
const _imports_2 = publicAssetsURL("/images/icon-carbon-neutral.svg");
const _imports_0 = publicAssetsURL("/images/icon-order-confirmed.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CartModal",
  __ssrInlineRender: true,
  props: {
    showModal: { type: Boolean },
    cart: {}
  },
  emits: ["close-modal", "reset-cart"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const originalCart = ref(JSON.parse(JSON.stringify(props.cart)));
    const totalPrice = computed(() => {
      return props.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    });
    watch(() => props.cart, (newCart) => {
      originalCart.value = JSON.parse(JSON.stringify(newCart));
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.showModal) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 bg-opacity-50 flex justify-center items-center z-50" }, _attrs))}><div class="bg-white p-6 rounded-lg w-[60%] mx-auto md:w-96"><img${ssrRenderAttr("src", _imports_0)} alt="Order confirmed" class="my-4"><h3 class="text-xl font-bold text-gray-900 mb-1">Order Confirmed</h3><span class="text-xs text-orange-900">We hope you enjoyed your food!</span><ul class="mt-4"><!--[-->`);
        ssrRenderList(_ctx.cart, (item, index) => {
          _push(`<li class="flex justify-between items-center border-b border-gray-200 py-2"><div class="flex flex-col"><span class="text-base font-bold">${ssrInterpolate(item.name)}</span><div class="flex gap-4 text-sm mt-2"><span class="text-orange-600 font-bold">${ssrInterpolate(item.quantity)}X</span><span class="text-gray-600 font-bold">$${ssrInterpolate((item.price * item.quantity).toFixed(2))}</span></div></div></li>`);
        });
        _push(`<!--]--></ul><div class="mt-4 flex justify-between items-center"><span class="font-medium text-gray-600">Total:</span><span class="font-bold text-lg">$${ssrInterpolate(totalPrice.value.toFixed(2))}</span></div><button class="mt-4 w-full bg-orange-600 py-2 rounded-3xl text-white">Start New Order</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Cart",
  __ssrInlineRender: true,
  props: {
    initialCart: {}
  },
  emits: ["remove-item"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const cart = ref(props.initialCart);
    const totalPrice = computed(() => {
      return cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
    });
    const showModal = ref(false);
    const closeModal = () => {
      showModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="mt-6 px-4 py-6 bg-white rounded-2xl shadow-lg"><h2 class="text-2xl text-orange-600 font-bold mb-4">Your Cart (${ssrInterpolate(cart.value.length)})</h2>`);
      if (cart.value.length === 0) {
        _push(`<div class="flex flex-col items-center"><img${ssrRenderAttr("src", _imports_0$1)} alt="Empty Cart" class="w-32 h-32 mb-2"><p class="text-gray-500">Your added items will appear here</p></div>`);
      } else {
        _push(`<div><ul><!--[-->`);
        ssrRenderList(cart.value, (item, index) => {
          _push(`<li class="flex justify-between items-center border-b border-gray-200 py-2"><div class="flex flex-col"><span class="text-base font-bold">${ssrInterpolate(item.name)}</span><div class="flex gap-4 text-sm mt-2"><span class="text-orange-600 font-bold">${ssrInterpolate(item.quantity)}X</span><span class="text-gray-500 font-medium">@ $${ssrInterpolate(item.price)}</span><span class="text-gray-600 font-bold">$${ssrInterpolate(item.price * item.quantity)}</span></div></div><img${ssrRenderAttr("src", _imports_1)} alt="remove" class="border border-gray-300 rounded-full p-2 cursor-pointer hover:bg-gray-100"></li>`);
        });
        _push(`<!--]--></ul><div class="mt-4 flex justify-between items-center"><span class="font-medium text-gray-600 text-sm">Order Total:</span><span class="font-bold text-lg">$${ssrInterpolate(totalPrice.value)}</span></div><div class="flex gap-3 p-4 bg-orange-50 mt-4"><img${ssrRenderAttr("src", _imports_2)} alt="carbon neutral"><p class="text-sm">This is a <span class="font-bold">carbon-neutral</span> delivery</p></div><button class="bg-orange-600 px-6 rounded-3xl w-full mt-5 py-2 text-white">Confirm Order</button></div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        showModal: showModal.value,
        cart: cart.value,
        onCloseModal: closeModal,
        onResetCart: _ctx.resetCart
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const desserts = ref([
      { id: 1, name: "Waffle with Berries", desc: "Waffle with Berries", price: 11, image: "/images/image-cake-desktop.jpg" },
      { id: 2, name: "Vanilla Bean Crème Brûlée", desc: "Waffle with berries", price: 12, image: "/images/image-baklava-mobile.jpg" },
      { id: 3, name: "Macaron Mix of Five", desc: "Waffle with Berries", price: 10, image: "/images/image-macaron-desktop.jpg" },
      { id: 4, name: "Macaron Mix of Five", desc: "Waffle with Berries", price: 9, image: "/images/image-brownie-desktop.jpg" },
      { id: 5, name: "Macaron Mix of Five", desc: "Waffle with Berries", price: 8, image: "/images/image-panna-cotta-mobile.jpg" },
      { id: 6, name: "Waffle", desc: "Waffle with Berries", price: 4, image: "/images/image-meringue-tablet.jpg" },
      { id: 7, name: "Waffle", desc: "Waffle with Berries", price: 14, image: "/images/image-tiramisu-tablet.jpg" },
      { id: 8, name: "Waffle", desc: "Waffle with Berries", price: 3, image: "/images/image-creme-brulee-thumbnail.jpg" },
      { id: 8, name: "Waffle", desc: "Waffle with Berries", price: 17, image: "/images/image-tiramisu-desktop.jpg" }
    ]);
    const cart = ref([]);
    const addToCart = (item) => {
      const existingItem = cart.value.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = { ...item, quantity: 1 };
        cart.value.push(newItem);
      }
    };
    const removeFromCart = (item) => {
      const itemIndex = cart.value.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex !== -1) {
        cart.value.splice(itemIndex, 1);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[90%] mx-auto p-4 min-h-screen" }, _attrs))}><div class="flex flex-col md:flex-row"><div class="w-full md:w-[70%]"><h1 class="text-3xl font-bold mb-7">Desserts</h1><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(desserts.value, (item, index) => {
        _push(ssrRenderComponent(_sfc_main$3, {
          key: index,
          dessert: item,
          onAddToCart: addToCart
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="w-full md:w-[30%] ml-0 md:ml-6">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        initialCart: cart.value,
        onRemoveItem: removeFromCart
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BsSpfCTx.js.map

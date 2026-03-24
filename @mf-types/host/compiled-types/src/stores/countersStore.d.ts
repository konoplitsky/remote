import type { StoreApi, UseBoundStore } from 'zustand';
type CounterState = {
    counter: number;
    increment: () => void;
};
declare global {
    interface Window {
        [GLOBAL_STORE_KEY]: UseBoundStore<StoreApi<CounterState>>;
    }
}
declare const GLOBAL_STORE_KEY = "__GLOBAL_COUNTERS_STORE__";
declare const useCounterStore: UseBoundStore<StoreApi<CounterState>>;
export { useCounterStore };
export default useCounterStore;

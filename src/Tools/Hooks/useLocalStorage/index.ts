import useStore from '../../Store/useStore';

const useLocalStorage = () => {
	const { selector } = useStore();
	return selector(s => s.localStorage);
};

export default useLocalStorage;

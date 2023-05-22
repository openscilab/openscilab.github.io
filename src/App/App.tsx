import '@assets/less/rsuite.config.less';
import '@assets/scss/base/export.scss';
import '@assets/scss/base/RSuite.scss';
import '@assets/scss/App.scss';
import '@assets/scss/base/tailwind.scss';
import Layouts from '../Views/Layouts';
import RoutesRenderer from './Routes/RouteRenderer';

const App = () => (
	<Layouts>
		<RoutesRenderer />
	</Layouts>
);

export default App;

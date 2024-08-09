const { platform } = os;
export default () => platform() !== 'linux' ? 0 : () => 0;

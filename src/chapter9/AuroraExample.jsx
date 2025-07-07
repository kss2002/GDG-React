import Aurora from './Aurora';

export default function AuroraExample() {
  return (
    <>
      <Aurora
        colorStops={['#55c83e', '#FF94B4', '#FF3232']}
        blend={0.7}
        amplitude={1.0}
        speed={1}
      />
    </>
  );
}

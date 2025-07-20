import { useProgress } from "@react-three/drei";

export default function LoadingScreen({ started, onStarted }) {
  const { progress } = useProgress();
  return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
      <div className="loading-screen-progress">
        <div
          className="loading-screen-progress-value"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <button
        className="loading-screen-button"
        disabled={progress < 100}
        onClick={onStarted}
      >
        Start
      </button>
    </div>
  );
}

import { forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        목표 시간은 <strong>{targetTime}초였습니다.</strong>
      </p>
      <p>
        타이머를 <strong>X초가 남은 상태에서</strong> 멈췄습니다.
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  )
});

export default ResultModal;
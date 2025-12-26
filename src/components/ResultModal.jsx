import { forwardRef, useImperativeHandle, useRef } from 'react';

// useImperativeHandle
// 컴포넌트 함수 내에 호출하여 컴포넌트 외부에서 접근할 수 있는 프로퍼티와 메서드를 정의
// 자주 사용 X, 프로퍼티나 다른 방식 선호

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return (
    <dialog ref={dialog} className="result-modal">
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
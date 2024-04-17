const form = document.querySelector("form")

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = new FormData(form)
  for (let [key, value] of data) {
    console.log(key, value);
  }
})

IMask(document.getElementById("Celular"), {
  mask: '{(}00{)} 0 0000{-}0000',
})

// --------------------------------------------------------

let currentStep = 0;
const formSteps = document.querySelectorAll(".form-step");


form.addEventListener('click', (e) => {
  if (!e.target.matches('[data-action')) {
    return
  }

  const actions = {
    next() {

      if (!isValidInput()) {
        return
      }

      currentStep++;
    },

    prev() {
      currentStep--;
    }
  }

  const action = e.target.dataset.action
  actions[action]();

  updateActiveStep();
  updateProgress()
})

function updateActiveStep() {
  formSteps.forEach(step => step.classList.remove('active'));
  formSteps[currentStep].classList.add('active')
}

const stepProgress = document.querySelectorAll('.steps [data-step]')
console.log(stepProgress);
function updateProgress() {
  stepProgress.forEach((step, i) => {
    console.log(step);
    step.classList.remove('active');
    step.classList.remove('done');

    if (i < currentStep + 1) {
      step.classList.add('active')
    }

    if (i < currentStep) {
      step.classList.add('done')
    }
  })
}

function isValidInput() {
  const currentFormStep = formSteps[currentStep]
  const formFields = [...currentFormStep.querySelectorAll('input'), ...currentFormStep.querySelectorAll('textarea')]

  return formFields.every(input => input.reportValidity())
}

formSteps.forEach(formStep => {
  function hideStep() {
    formStep.classList.add('hide')
  }

  formStep.addEventListener('animationend', () => {
    hideStep()
    formSteps[currentStep].classList.remove('hide')
  })
})
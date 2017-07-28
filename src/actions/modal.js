export function toggleSignUpModal() {
  const bodyStyle = document.querySelector('body').style
  if (!bodyStyle.overflow || bodyStyle.overflow === "auto") {
    bodyStyle.overflow = "hidden"
  } else if (bodyStyle.overflow === 'hidden') {
    bodyStyle.overflow = "auto"
  }
  return {
    type: 'TOGGLE_SIGNUP_MODAL'
  }
}

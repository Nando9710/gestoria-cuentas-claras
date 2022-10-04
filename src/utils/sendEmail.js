export const sendEmail = async () => {
  const SERVICE_ID = "service_57ixi0b";
  const TEMPLATE_ID = "template_lg2ejcn";

  let error = null;

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, form.value);
  } catch (err) {
    error = err;
  } finally {
    return { error };
  }
};

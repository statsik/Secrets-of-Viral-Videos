'use client';

import Modal from '../Modal/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useModalStore } from '../../../lib/stores/modalStore';
import { sendMessage } from '../../../lib/api/telegramAPI';
import toast from 'react-hot-toast';
import { useLangStore } from '../../../lib/stores/langStore';

const validationSchema = Yup.object({
  name: Yup.string().required('Введіть ім’я'),
  telegram: Yup.string().required('Введіть ваш нік Telegram'),
  email: Yup.string().email('Некоректний email').required('Введіть email'),
});

export default function SendForm() {
  const { isModalOpen, closeModal } = useModalStore();
  const { lang } = useLangStore();

  const initialValues = {
    name: '',
    telegram: '',
    email: '',
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      await sendMessage(values);

      toast.success('Форма успішно відправлена!');

      closeModal();
    } catch (error) {
      console.log(error);

      toast.error('Виникла помилка!');
    }
  };

  if (!isModalOpen) return null;
  return (
    <Modal onClose={closeModal}>
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-white text-xl font-bold hover:text-gray-300"
      >
        ✕
      </button>

      <h2 className="text-white text-xl font-semibold text-center mt-[90px]">
        {lang.value === 'ua' ? 'УКАЖІТЬ СВОЇ ДАНІ' : 'ENTER YOUR DATA'}
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-[18px] mt-[36px] text-black">
            <div>
              <Field
                name="name"
                placeholder="Ім’я"
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                name="telegram"
                placeholder="Telegram username"
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <ErrorMessage
                name="telegram"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="mt-[40px] mb-[73px] py-2 px-4 bg-white text-black rounded-lg font-semibold hover:opacity-90"
            >
              {lang.value === 'ua' ? (
                <>{isSubmitting ? 'Відправка...' : 'Відправити'}</>
              ) : (
                <>{isSubmitting ? 'Sending...' : 'Send'}</>
              )}
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

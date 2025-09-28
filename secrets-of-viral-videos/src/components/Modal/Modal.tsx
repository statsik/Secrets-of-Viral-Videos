'use client';

import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const validationSchema = Yup.object({
    name: Yup.string().required('Введіть ім’я'),
    telegram: Yup.string().required('Введіть ваш нік Telegram'),
    email: Yup.string().email('Некоректний email').required('Введіть email'),
  });

  const initialValues = {
    name: '',
    telegram: '',
    email: '',
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form values:', values);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#1A0A3C] rounded-2xl w-full max-w-[410px] px-[50px] relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl font-bold hover:text-gray-300"
        >
          ✕
        </button>

        <h2 className="text-white text-xl font-semibold text-center mt-[90px]">
          УКАЖІТЬ СВОЇ ДАНІ
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-[18px] mt-[36px]">
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
                placeholder="Нік Telegram"
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
              Відправити
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Modal;

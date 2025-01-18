<script lang="ts" setup>
  import { Form , useForm } from 'vee-validate';
  import * as yup from 'yup';
  import { useI18n } from 'vue-i18n';
  import Input from '@/components/Input.vue';
  import Label from '@/components/Label.vue';
  import Textarea from '@/components/Textarea.vue';
  import Button from '@/components/Button.vue';
  import { FormItem } from '../types';
  import { ref } from 'vue';
  import axios from 'axios';
  
  const { t } = useI18n();

  yup.setLocale({
    mixed: {
      required: t('required')
    },
    string: {
      email: t('email-format')
    }
  });
  const schema = yup.object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    phone: yup.string().required(),
    message: yup.string().required()
  });
  const form = ref<FormItem>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const alert = ref<{
    active: boolean,
    type:  string;
    text: string;
  }>({
    active: false,
    type: '',
    text: ''
  });


  const sendEmail = async(
    values: any, actions: {
    [x: string]: any; setFieldValue: (arg0: string, arg1: string) => void; 
    }
  ) => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/send_email`, {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        message: form.value.message
      })
      actions.resetForm();
      alert.value = {
        active: true,
        type: 'success',
        text: t('email-success')
      }
    } catch (error) {
      console.log("🚀 ~ error:", error)
      alert.value = {
        active: true,
        type: 'error',
        text: t('email-error')
      }
    } finally {
      setTimeout(() => {
        alert.value = {
          active: false,
          type: '',
          text: ''
        }
      }, 6000);
    }
  }
</script>

<template>
  <Form 
    ref="formElement"
    :validation-schema="schema" 
    class="bg-white rounded-lg overflow-hidden"
    v-slot="{ isSubmitting }"
    @submit="sendEmail"
  >
    <div class="h-3 bg-teal w-full"></div>

    <div v-if="alert.active" class="py-2 px-5 rounded-md w-max mt-10 text-xs mx-auto font-bold" :class="alert.type === 'success' ? 'bg-blue-300 text-blue-500' : 'bg-red-300 text-red-600'" >
      <span>{{ alert.text }}</span>
    </div>

    <div class="lg:px-16 px-8 lg:py-16 py-5" :class="alert.active ? 'lg:py-8 py-5' : 'lg:py-16 py-5'">
      <div class="w-full mb-5">
        <Label :value="t('form.name')" class="mb-2" />
        <Input 
          v-model="form.name"
          type="text"
          name="name"
          placeholder="Joe Doe"
        />
      </div>
      <div class="w-full mb-5">
        <Label :value="t('form.email')" class="mb-2" />
        <Input 
          v-model="form.email"
          type="email"
          name="email"
          placeholder="joe@example.com"
        />
      </div>
      <div class="w-full mb-5">
        <Label :value="t('form.phone')" class="mb-2" />
        <Input 
          v-model="form.phone"
          type="text"
          name="phone"
          placeholder="0000-0000"
        />
      </div>
      <div class="w-full mb-10">
        <Label :value="t('form.message')" class="mb-2" />
        <Textarea 
          v-model="form.message"
          name="message"
        />
      </div>
      <div class="w-full mb-5">
        <Button :disabled="isSubmitting ">{{ t('form.send') }}</Button>
      </div>
    </div>
  </Form>
</template>
// src/@types/custom-types.d.ts

import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user_id?: string;  // Supondo que user_id seja uma string; ajuste o tipo conforme necessário
  }
}

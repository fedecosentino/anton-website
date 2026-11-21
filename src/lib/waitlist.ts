// Punto único de integración de los formularios (lista de espera y contacto).
// Hoy es una simulación: no envía ni guarda nada.
export type Profile = 'persona' | 'empresa' | 'builder' | 'inversor';

export interface WaitlistPayload {
  kind: 'waitlist' | 'contact';
  profile: Profile;
  email: string;
  name?: string;
  company?: string;
  message?: string;
  consent?: boolean;
}

export interface WaitlistResult {
  stored: false;
}

// TODO: conectar con el proveedor real de lista de espera (y revisar el aviso de
// privacidad) antes de publicar. Mientras tanto, los datos no salen del navegador.
export async function submitWaitlist(_payload: WaitlistPayload): Promise<WaitlistResult> {
  return { stored: false };
}

export const PROFILES: Profile[] = ['persona', 'empresa', 'builder', 'inversor'];

export function isProfile(v: string | null): v is Profile {
  return !!v && (PROFILES as string[]).includes(v);
}

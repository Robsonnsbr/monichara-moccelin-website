// TODO: Sem utilização até implementar os dados do google workspace

interface Testimonial {
  key: number;
  name: string;
  stars: number;
  testimonial: string;
}

interface TestimonialsData {
  testimonials: Testimonial[];
}
// Função assíncrona para obter os dados com um atraso simulado de 3 segundos
export async function getTestimonialsData(): Promise<TestimonialsData> {
  try {
    // Substitua a URL abaixo pela localização real do seu arquivo JSON ou a URL de onde está hospedado.
    const response = await fetch('./testimonials-temp-db.json');

    if (!response.ok) {
      throw new Error(`Erro ao obter os dados. Status: ${response.status}`);
    }

    // Aguarda 3 segundos antes de retornar os dados
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data: TestimonialsData = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter os dados:', error);
    throw error; // Você pode escolher lidar com o erro de uma forma específica para o seu aplicativo
  }
}

export const surveyObject = (
  question: string = 'Você gostou e usaria esse projeto?',
  description: string = 'Gostou desse projeto, conta pra gente',
  startPublish: string = '2023-02-01T00:00:00Z',
  stopPublish: string = '2023-03-01T00:00:00Z',
  options: string[] = ['Sim', 'Não']
): any => ({
  question,
  description,
  startPublish,
  stopPublish,
  options,
});

const SupabasePipe = async ({ data, error }) => {
  if (error && error.code) {
    throw new Error(error.message);
  }
  return data;
};

module.export =  { SupabasePipe };

CREATE TABLE public.enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type TEXT NOT NULL CHECK (form_type IN ('contact', 'involvement')),
  full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  email TEXT NOT NULL CHECK (char_length(email) <= 255),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 30),
  organisation TEXT CHECK (organisation IS NULL OR char_length(organisation) <= 150),
  enquiry_type TEXT NOT NULL CHECK (char_length(enquiry_type) BETWEEN 2 AND 80),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 10 AND 2000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.enquiries IS 'Private contact and involvement enquiries submitted through the Asihwebe Foundation website.';
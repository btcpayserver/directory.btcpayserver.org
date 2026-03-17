import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { typeMap, merchantSubTypes, subTypeLabels, countryFlag } from "@/data/categories";
import { countries } from "@/data/countries";
import { ExternalLink, CheckCircle2, AlertCircle, Globe, AtSign, Tag, Layers, MapPin, FileText } from "lucide-react";

const REPO_URL =
  "https://github.com/btcpayserver/directory.btcpayserver.org/issues/new";

interface SubmitFormProps {
  onSuccess?: () => void;
}

export default function SubmitForm({ onSuccess }: SubmitFormProps) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");
  const [country, setCountry] = useState("");
  const [twitter, setTwitter] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isMerchant = type === "merchants";
  const isHostedBtcpay = type === "hosted-btcpay";

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!url.trim()) {
      newErrors.url = "URL is required";
    } else if (!/^https?:\/\//i.test(url.trim())) {
      newErrors.url = "URL must start with https:// or http://";
    }
    if (!description.trim()) newErrors.description = "Description is required";
    if (!type) newErrors.type = "Category is required";
    if (isMerchant && !subType) newErrors.subType = "Subcategory is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      "New submission:",
      "",
      `Name: ${name.trim()}`,
      `Url: ${url.trim()}`,
    ];
    if (twitter.trim()) lines.push(`Twitter: ${twitter.trim()}`);
    lines.push(`Type: ${type}`);
    if (isMerchant && subType) lines.push(`SubType: ${subType}`);
    if (isHostedBtcpay && country) lines.push(`Country: ${country}`);
    lines.push(`Description: ${description.trim()}`);

    const issueTitle = `New entry submission - ${name.trim()}`;
    const issueBody = lines.join("\n");

    const params = new URLSearchParams({
      title: issueTitle,
      body: issueBody,
    });

    window.open(
      `${REPO_URL}?${params.toString()}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
    setTimeout(() => onSuccess?.(), 2000);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-5 text-center space-y-4 sm:py-16 sm:px-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-500 sm:h-16 sm:w-16">
          <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />
        </div>
        <div className="space-y-1.5">
          <h3 className="font-display text-lg font-bold sm:text-xl">Submission opened!</h3>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            A GitHub issue has been opened in a new tab. The team will review your
            submission.
          </p>
        </div>
        <p className="text-xs text-muted-foreground/60">This window will close automatically…</p>
      </div>
    );
  }

  const baseInput =
    "w-full h-12 pl-9 pr-3 rounded-xl bg-muted/40 border text-base sm:text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:bg-background focus:border-primary/40 focus:ring-4 focus:ring-primary/8";
  const baseSelect =
    "w-full h-12 pl-9 pr-3 rounded-xl bg-muted/40 border text-base sm:text-sm outline-none transition-all duration-200 appearance-none cursor-pointer focus:bg-background focus:border-primary/40 focus:ring-4 focus:ring-primary/8";
  const errorBorder = "border-red-500/50 bg-red-500/5";
  const okBorder = "border-transparent";

  const inputClass = (field: string) =>
    `${baseInput} ${errors[field] ? errorBorder : okBorder}`;
  const selectClass = (field: string) =>
    `${baseSelect} ${errors[field] ? errorBorder : okBorder}`;

  const FieldError = ({ field }: { field: string }) =>
    errors[field] ? (
      <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
        <AlertCircle className="h-3 w-3 shrink-0" />
        {errors[field]}
      </p>
    ) : null;

  const fieldLabel = (text: string, required?: boolean) => (
    <label className="text-sm font-medium text-foreground/80">
      {text}
      {required && <span className="ml-0.5 text-red-500">*</span>}
    </label>
  );

  return (
    <>
      <div className="px-4 pt-4 pb-4 border-b border-border/60 sm:px-6 sm:pt-6 sm:pb-5">
        <DialogHeader>
          <DialogTitle>Submit a new entry</DialogTitle>
          <DialogDescription className="mt-1">
            Fill in the details below — this will open a pre-filled GitHub issue
            for the team to review.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form onSubmit={handleSubmit} className="px-4 py-4 space-y-3 sm:px-6 sm:py-5 sm:space-y-4">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            {fieldLabel("Name", true)}
            <div className="relative">
              <FileText className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
              <input
                type="text"
                placeholder="Your project or store name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass("name")}
              />
            </div>
            <FieldError field="name" />
          </div>

          <div className="space-y-1.5">
            {fieldLabel("URL", true)}
            <div className="relative">
              <Globe className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
              <input
                type="text"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={inputClass("url")}
              />
            </div>
            <FieldError field="url" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            {fieldLabel("Category", true)}
            <div className="relative">
              <Tag className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
              <select
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  if (e.target.value !== "merchants") setSubType("");
                  if (e.target.value !== "hosted-btcpay") setCountry("");
                }}
                className={selectClass("type")}
              >
                <option value="">Select a category…</option>
                {Object.entries(typeMap).map(([display, value]) => (
                  <option key={value} value={value}>
                    {display}
                  </option>
                ))}
              </select>
            </div>
            <FieldError field="type" />
          </div>

          {isMerchant && (
            <div className="space-y-1.5">
              {fieldLabel("Subcategory", true)}
              <div className="relative">
                <Layers className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                <select
                  value={subType}
                  onChange={(e) => setSubType(e.target.value)}
                  className={selectClass("subType")}
                >
                  <option value="">Select a subcategory…</option>
                  {merchantSubTypes.map((st) => (
                    <option key={st} value={st}>
                      {subTypeLabels[st] || st}
                    </option>
                  ))}
                </select>
              </div>
              <FieldError field="subType" />
            </div>
          )}

          {isHostedBtcpay && (
            <div className="space-y-1.5">
              {fieldLabel("Country")}
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={selectClass("country")}
                >
                  <option value="">Select a country (optional)…</option>
                  {Object.entries(countries).map(([code, countryName]) => (
                    <option key={code} value={code}>
                      {countryFlag(code)} {countryName}
                    </option>
                  ))}
                </select>
              </div>
              <FieldError field="country" />
            </div>
          )}

          {!isMerchant && !isHostedBtcpay && (
            <div className="hidden sm:block" />
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            {fieldLabel("Description", true)}
            <span
              className={`text-xs tabular-nums ${
                description.length > 180
                  ? "text-red-500 font-medium"
                  : description.length > 150
                  ? "text-amber-500"
                  : "text-muted-foreground"
              }`}
            >
              {description.length}/180
            </span>
          </div>
          <textarea
            placeholder="Brief description of your project or store…"
            value={description}
            onChange={(e) => setDescription(e.target.value.slice(0, 180))}
            rows={3}
            className={`w-full px-3 py-2.5 rounded-xl bg-muted/40 border text-base sm:text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:bg-background focus:border-primary/40 focus:ring-4 focus:ring-primary/8 resize-none leading-relaxed ${
              errors.description ? errorBorder : okBorder
            }`}
          />
          <FieldError field="description" />
        </div>

        {/* Twitter */}
        <div className="space-y-1.5">
          {fieldLabel("Twitter / X")}
          <div className="relative">
            <AtSign className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
            <input
              type="text"
              placeholder="yourhandle (optional)"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              className={inputClass("twitter")}
            />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-1 pb-safe sm:pb-0">
          <Button
            type="submit"
            className="w-full h-12 rounded-xl font-semibold text-base gap-2"
          >
            Submit to GitHub
            <ExternalLink className="h-4 w-4" />
          </Button>
          <p className="mt-2 text-center text-xs text-muted-foreground/60">
            Opens a pre-filled GitHub issue in a new tab
          </p>
        </div>
      </form>
    </>
  );
}

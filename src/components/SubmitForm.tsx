import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { typeMap, merchantSubTypes, subTypeLabels, countryFlag } from "@/data/categories";
import { countries } from "@/data/countries";
import { ExternalLink } from "lucide-react";

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
      <div className="py-12 text-center space-y-3">
        <div className="text-4xl">🎉</div>
        <h3 className="text-lg font-semibold">Submission opened!</h3>
        <p className="text-sm text-muted-foreground">
          A GitHub issue has been opened in a new tab. The team will review your
          submission.
        </p>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full h-11 px-3 rounded-lg bg-muted/40 border text-sm outline-none transition-all duration-200 focus:bg-background focus:border-primary/30 focus:ring-4 focus:ring-primary/10 ${
      errors[field]
        ? "border-red-500/50 bg-red-500/5"
        : "border-transparent"
    }`;

  const selectClass = (field: string) =>
    `w-full h-11 px-3 rounded-lg bg-muted/40 border text-sm outline-none transition-all duration-200 focus:bg-background focus:border-primary/30 focus:ring-4 focus:ring-primary/10 appearance-none cursor-pointer ${
      errors[field]
        ? "border-red-500/50 bg-red-500/5"
        : "border-transparent"
    }`;

  return (
    <>
      <DialogHeader>
        <DialogTitle>Submit a new entry</DialogTitle>
        <DialogDescription>
          Fill in the details below. This will open a GitHub issue for review.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your project or store name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass("name")}
          />
        </div>

        {/* URL */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">
            URL <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={inputClass("url")}
          />
          {errors.url && (
            <p className="text-xs text-red-500 mt-1">{errors.url}</p>
          )}
        </div>

        {/* Type */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">
            Category <span className="text-red-500">*</span>
          </label>
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

        {/* SubType (merchants only) */}
        {isMerchant && (
          <div className="space-y-1.5">
            <label className="text-sm font-medium">
              Subcategory <span className="text-red-500">*</span>
            </label>
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
        )}

        {/* Country (hosted-btcpay only) */}
        {isHostedBtcpay && (
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={selectClass("country")}
            >
              <option value="">Select a country (optional)…</option>
              {Object.entries(countries).map(([code, name]) => (
                <option key={code} value={code}>
                  {countryFlag(code)} {name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Description */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">
              Description <span className="text-red-500">*</span>
            </label>
            <span
              className={`text-xs ${
                description.length > 180
                  ? "text-red-500"
                  : "text-muted-foreground"
              }`}
            >
              {description.length}/180
            </span>
          </div>
          <textarea
            placeholder="Brief description of your project…"
            value={description}
            onChange={(e) => setDescription(e.target.value.slice(0, 180))}
            rows={3}
            className={`w-full px-3 py-2.5 rounded-lg bg-muted/40 border text-sm outline-none transition-all duration-200 focus:bg-background focus:border-primary/30 focus:ring-4 focus:ring-primary/10 resize-none ${
              errors.description
                ? "border-red-500/50 bg-red-500/5"
                : "border-transparent"
            }`}
          />
        </div>

        {/* Twitter */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Twitter</label>
          <input
            type="text"
            placeholder="@yourhandle"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className={inputClass("twitter")}
          />
        </div>

        <Button
          type="submit"
          className="w-full rounded-lg h-11 font-semibold gap-2"
        >
          Submit to GitHub
          <ExternalLink className="w-4 h-4" />
        </Button>
      </form>
    </>
  );
}

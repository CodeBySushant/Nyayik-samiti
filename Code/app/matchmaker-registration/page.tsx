"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarIcon, ArrowLeft, User, Phone, MapPin, GraduationCap } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function MatchmakerRegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: undefined as Date | undefined,
    gender: "",
    mobileNumber: "",
    email: "",
    citizenshipNumber: "",
    grandfatherName: "",
    fatherName: "",
    permanentProvince: "",
    permanentDistrict: "",
    permanentPalika: "",
    permanentWard: "",
    isCurrentSameAsPermanent: false,
    currentProvince: "",
    currentDistrict: "",
    currentPalika: "",
    currentWard: "",
    education: "",
    experience: "",
    specialization: "",
    languages: "",
    availability: "",
    fees: "",
    bio: "",
    agreeToTerms: false,
  })

  const provinces = [
    "प्रदेश नं. १",
    "मधेस प्रदेश",
    "बागमती प्रदेश",
    "गण्डकी प्रदेश",
    "लुम्बिनी प्रदेश",
    "कर्णाली प्रदेश",
    "सुदूरपश्चिम प्रदेश",
  ]

  const genders = ["पुरुष", "महिला", "अन्य"]
  const educationLevels = ["एसएलसी/एसईई", "प्लस टु/१२ कक्षा", "स्नातक", "स्नातकोत्तर", "कानुन स्नातक", "कानुन स्नातकोत्तर", "अन्य"]

  const specializations = [
    "पारिवारिक विवाद",
    "जग्गा जमिन विवाद",
    "व्यापारिक विवाद",
    "श्रमिक विवाद",
    "सामुदायिक विवाद",
    "अन्य",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeToTerms) {
      alert("कृपया नियम र सर्तहरूमा सहमति जनाउनुहोस्")
      return
    }
    console.log("Matchmaker Registration:", formData)
    alert("मध्यस्थकर्ता दर्ता सफलतापूर्वक भयो! हामी छिट्टै तपाईंलाई सम्पर्क गर्नेछौं।")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#003893] text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              फिर्ता
            </Link>
            <div>
              <h1 className="text-3xl font-bold">मध्यस्थकर्ता दर्ता फारम</h1>
              <p className="text-blue-100 mt-2">मध्यस्थकर्ताको रूपमा दर्ता हुनुहोस्</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#003893] flex items-center">
                <User className="mr-2 h-5 w-5" />
                व्यक्तिगत जानकारी
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="firstName">पहिलो नाम *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="middleName">बिचको नाम</Label>
                  <Input
                    id="middleName"
                    value={formData.middleName}
                    onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">थर *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>जन्म मिति *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.dateOfBirth && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.dateOfBirth ? format(formData.dateOfBirth, "PPP") : "मिति छान्नुहोस्"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.dateOfBirth}
                        onSelect={(date) => setFormData({ ...formData, dateOfBirth: date })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label htmlFor="gender">लिङ्ग *</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => setFormData({ ...formData, gender: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="लिङ्ग छान्नुहोस्" />
                    </SelectTrigger>
                    <SelectContent>
                      {genders.map((gender) => (
                        <SelectItem key={gender} value={gender}>
                          {gender}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="citizenshipNumber">नागरिकता नम्बर *</Label>
                  <Input
                    id="citizenshipNumber"
                    value={formData.citizenshipNumber}
                    onChange={(e) => setFormData({ ...formData, citizenshipNumber: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="grandfatherName">हजुरबुबाको नाम</Label>
                  <Input
                    id="grandfatherName"
                    value={formData.grandfatherName}
                    onChange={(e) => setFormData({ ...formData, grandfatherName: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="fatherName">बुबाको नाम *</Label>
                  <Input
                    id="fatherName"
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#003893] flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                सम्पर्क जानकारी
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mobileNumber">मोबाइल नम्बर *</Label>
                  <Input
                    id="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">इमेल ठेगाना</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#003893] flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                ठेगाना
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Permanent Address */}
              <div>
                <h4 className="font-semibold text-[#003893] mb-3">स्थायी ठेगाना</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="permanentProvince">प्रदेश *</Label>
                    <Select
                      value={formData.permanentProvince}
                      onValueChange={(value) => setFormData({ ...formData, permanentProvince: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="प्रदेश छान्नुहोस्" />
                      </SelectTrigger>
                      <SelectContent>
                        {provinces.map((province) => (
                          <SelectItem key={province} value={province}>
                            {province}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="permanentDistrict">जिल्ला *</Label>
                    <Input
                      id="permanentDistrict"
                      value={formData.permanentDistrict}
                      onChange={(e) => setFormData({ ...formData, permanentDistrict: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="permanentPalika">पालिका *</Label>
                    <Input
                      id="permanentPalika"
                      value={formData.permanentPalika}
                      onChange={(e) => setFormData({ ...formData, permanentPalika: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="permanentWard">वडा नं. *</Label>
                    <Input
                      id="permanentWard"
                      value={formData.permanentWard}
                      onChange={(e) => setFormData({ ...formData, permanentWard: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Current Address */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Checkbox
                    id="sameAddress"
                    checked={formData.isCurrentSameAsPermanent}
                    onCheckedChange={(checked) => setFormData({ ...formData, isCurrentSameAsPermanent: !!checked })}
                  />
                  <Label htmlFor="sameAddress">हालको ठेगाना स्थायी ठेगाना जस्तै छ</Label>
                </div>

                {!formData.isCurrentSameAsPermanent && (
                  <>
                    <h4 className="font-semibold text-[#003893] mb-3">हालको ठेगाना</h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <Label htmlFor="currentProvince">प्रदेश</Label>
                        <Select
                          value={formData.currentProvince}
                          onValueChange={(value) => setFormData({ ...formData, currentProvince: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="प्रदेश छान्नुहोस्" />
                          </SelectTrigger>
                          <SelectContent>
                            {provinces.map((province) => (
                              <SelectItem key={province} value={province}>
                                {province}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="currentDistrict">जिल्ला</Label>
                        <Input
                          id="currentDistrict"
                          value={formData.currentDistrict}
                          onChange={(e) => setFormData({ ...formData, currentDistrict: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="currentPalika">पालिका</Label>
                        <Input
                          id="currentPalika"
                          value={formData.currentPalika}
                          onChange={(e) => setFormData({ ...formData, currentPalika: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="currentWard">वडा नं.</Label>
                        <Input
                          id="currentWard"
                          value={formData.currentWard}
                          onChange={(e) => setFormData({ ...formData, currentWard: e.target.value })}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#003893] flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                व्यावसायिक जानकारी
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="education">शिक्षा *</Label>
                  <Select
                    value={formData.education}
                    onValueChange={(value) => setFormData({ ...formData, education: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="शिक्षा छान्नुहोस्" />
                    </SelectTrigger>
                    <SelectContent>
                      {educationLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="experience">अनुभव (वर्षमा) *</Label>
                  <Input
                    id="experience"
                    type="number"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="उदाहरण: ५"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="specialization">विशेषज्ञता *</Label>
                  <Select
                    value={formData.specialization}
                    onValueChange={(value) => setFormData({ ...formData, specialization: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="विशेषज्ञता छान्नुहोस्" />
                    </SelectTrigger>
                    <SelectContent>
                      {specializations.map((spec) => (
                        <SelectItem key={spec} value={spec}>
                          {spec}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="languages">भाषाहरू *</Label>
                  <Input
                    id="languages"
                    value={formData.languages}
                    onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                    placeholder="उदाहरण: नेपाली, हिन्दी, अंग्रेजी"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="availability">उपलब्धता</Label>
                  <Input
                    id="availability"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    placeholder="उदाहरण: आइतबार - शुक्रबार, १०:०० - ५:००"
                  />
                </div>
                <div>
                  <Label htmlFor="fees">शुल्क (प्रति घण्टा)</Label>
                  <Input
                    id="fees"
                    type="number"
                    value={formData.fees}
                    onChange={(e) => setFormData({ ...formData, fees: e.target.value })}
                    placeholder="रु. मा"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="bio">आफ्नो बारेमा *</Label>
                <Textarea
                  id="bio"
                  rows={4}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="आफ्नो अनुभव, विशेषज्ञता र मध्यस्थताको दृष्टिकोणको बारेमा लेख्नुहोस्"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: !!checked })}
                  required
                />
                <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
                  म यस मध्यस्थकर्ता दर्ता फारममा उल्लेख गरिएका सबै जानकारीहरू सत्य र सही भएको पुष्टि गर्दछु। म न्यायिक समितिका नियम र
                  सर्तहरू पालना गर्न सहमत छु र मध्यस्थताको काममा निष्पक्षता र इमानदारीका साथ काम गर्ने वाचा गर्दछु।
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <Button
              type="submit"
              size="lg"
              className="bg-[#003893] hover:bg-[#003893]/90 text-white px-12 py-4 text-lg font-semibold"
            >
              मध्यस्थकर्ता दर्ता गर्नुहोस्
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

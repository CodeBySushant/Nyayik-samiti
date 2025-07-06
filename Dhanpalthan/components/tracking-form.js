"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Search, FileText, Phone, CreditCard } from "lucide-react"

export default function TrackingForm() {
  const [trackingMethod, setTrackingMethod] = useState("citizenship")
  const [formData, setFormData] = useState({
    citizenshipNumber: "",
    caseNumber: "",
    mobileNumber: "",
  })
  const [trackingResult, setTrackingResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Mock tracking result
      setTrackingResult({
        caseNumber: "२०८१/०१/००१",
        caseSubject: "जग्गा विवाद",
        status: "सुनुवाई चरणमा",
        registrationDate: "२०८१/०१/१५",
        nextHearingDate: "२०८१/०२/०१",
        currentStage: "प्रारम्भिक सुनुवाई",
        remarks: "दुवै पक्षको उपस्थिति आवश्यक",
      })
      setIsLoading(false)
    }, 2000)
  }

  const resetForm = () => {
    setFormData({
      citizenshipNumber: "",
      caseNumber: "",
      mobileNumber: "",
    })
    setTrackingResult(null)
  }

  return (
    <section id="tracking-form" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003893] mb-4">उजुरी ट्र्याकिङ</h2>
          <p className="text-gray-600 text-lg">आफ्नो उजुरीको स्थिति जान्नुहोस्</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tracking Form */}
          <Card className="border-2 border-[#003893]/20">
            <CardHeader>
              <CardTitle className="text-xl text-[#003893] flex items-center">
                <Search className="mr-2 h-5 w-5" />
                खोज विकल्प
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Tracking Method Selection */}
                <div>
                  <Label className="text-base font-semibold text-[#003893] mb-3 block">खोज्ने तरिका छान्नुहोस्</Label>
                  <RadioGroup value={trackingMethod} onValueChange={setTrackingMethod} className="space-y-3">
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="citizenship" id="citizenship" />
                      <Label htmlFor="citizenship" className="flex items-center cursor-pointer">
                        <CreditCard className="mr-2 h-4 w-4 text-[#DC143C]" />
                        नागरिकता नम्बर र मोबाइल नम्बर
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="case" id="case" />
                      <Label htmlFor="case" className="flex items-center cursor-pointer">
                        <FileText className="mr-2 h-4 w-4 text-[#DC143C]" />
                        मुद्दा नम्बर र मोबाइल नम्बर
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  {trackingMethod === "citizenship" ? (
                    <div>
                      <Label htmlFor="citizenshipNumber" className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4 text-[#DC143C]" />
                        नागरिकता नम्बर *
                      </Label>
                      <Input
                        id="citizenshipNumber"
                        value={formData.citizenshipNumber}
                        onChange={(e) => setFormData({ ...formData, citizenshipNumber: e.target.value })}
                        placeholder="उदाहरण: १२३४५६७८९०"
                        required
                      />
                    </div>
                  ) : (
                    <div>
                      <Label htmlFor="caseNumber" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-[#DC143C]" />
                        मुद्दा नम्बर *
                      </Label>
                      <Input
                        id="caseNumber"
                        value={formData.caseNumber}
                        onChange={(e) => setFormData({ ...formData, caseNumber: e.target.value })}
                        placeholder="उदाहरण: २०८१/०१/००१"
                        required
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="mobileNumber" className="flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-[#DC143C]" />
                      मोबाइल नम्बर *
                    </Label>
                    <Input
                      id="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      placeholder="उदाहरण: ९८४१२३४५६७"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-3">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-[#003893] hover:bg-[#003893]/90 text-white"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        खोज्दै...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-4 w-4" />
                        खोज्नुहोस्
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                    className="border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white bg-transparent"
                  >
                    रिसेट
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Tracking Result */}
          <Card className="border-2 border-[#DC143C]/20">
            <CardHeader>
              <CardTitle className="text-xl text-[#003893] flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                उजुरीको स्थिति
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!trackingResult ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">उजुरीको स्थिति हेर्न माथिको फारम भर्नुहोस्</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="font-semibold text-green-800">उजुरी फेला पर्यो</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium text-gray-600">मुद्दा नम्बर:</span>
                      <span className="font-semibold text-[#003893]">{trackingResult.caseNumber}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium text-gray-600">विषय:</span>
                      <span className="font-semibold">{trackingResult.caseSubject}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium text-gray-600">हालको स्थिति:</span>
                      <span className="font-semibold text-[#DC143C]">{trackingResult.status}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium text-gray-600">दर्ता मिति:</span>
                      <span>{trackingResult.registrationDate}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium text-gray-600">अर्को सुनुवाई:</span>
                      <span className="font-semibold text-orange-600">{trackingResult.nextHearingDate}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium text-gray-600">चरण:</span>
                      <span>{trackingResult.currentStage}</span>
                    </div>
                  </div>

                  {trackingResult.remarks && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                      <h4 className="font-semibold text-blue-800 mb-2">टिप्पणी:</h4>
                      <p className="text-blue-700">{trackingResult.remarks}</p>
                    </div>
                  )}

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">महत्वपूर्ण सूचना:</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• सुनुवाईको मिति र समयमा उपस्थित हुनुहोस्</li>
                      <li>• आवश्यक कागजातहरू साथमा ल्याउनुहोस्</li>
                      <li>• थप जानकारीको लागि कार्यालयमा सम्पर्क गर्नुहोस्</li>
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

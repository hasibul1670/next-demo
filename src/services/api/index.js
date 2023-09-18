import { getApi, postApi, postFormData, putApi } from './request'

//themes
export const GetAllThemes = (data) => postApi('theme/all', data)

export const GetSiteSettings = (pageId, updatedAt) =>
  getApi(`site-settings?updatedAt=${updatedAt}&pageId=${pageId}`)
export const UpdateSiteSettingsInfo = (data) =>
  postApi('site-settings/check-update-siteSettings', data)
export const GetSitePageWidgets = (pageId, host) => getApi(`site-settings/${pageId}`, host)

//Airport

export const GetAllAirports = (data) =>
  getApi(
    data.countryCode && data.searchText
      ? `airport/airport-list?countryCode=${data.countryCode}&searchText=${data.searchText}`
      : `airport/airport-list?countryCode=${data.countryCode}`,
  )
//Authentication

export const RegistrationAPi = (data) => postApi('auth/register', data)

export const LoginApi = (data) => postApi('auth/login', data)

export const GoogleLoginApi = (data) => postApi('auth/google-login', data)

export const VerifyEmail = (data) => postApi('auth/verify-email', data)

export const SendVerificationEmail = (data) => postApi('auth/send-verification-email', data)

export const ResetPasswordApi = (data) => postApi('auth/reset-password', data)

export const GetUserProfile = (userID) => getApi(`user/user-info/${userID}`)

export const EditProfile = (data) => putApi('user/edit-profile', data)

export const ChangePassword = (data) => putApi('user/change-password', data)

//search Flight

export const SearchFlightAllResult = (data) => postApi('flight/search-flight', data)

//file upload

export const UploadFile = (data) => postFormData('file/upload-file', data)

//My Booking

export const MyFlightBookingList = (data) =>
  postApi('flight-booking/user-flight-booking-list', data)
//flight Booking
export const CreateFlightBookingApi = (data) => postApi('flight-booking/create', data)

//all Country location/country

export const GetAllCountry = (data) => postApi('location/country', data)

//visa

export const GetSearchedVisa = (data) => postApi('visa/search-visa', data)

export const CreateVisaBooking = (data) => postApi('visa-booking/create-booking', data)

export const MyVisaBookingListApi = (data) => postApi('visa-booking/user-booking-list', data)

//Tour Search
export const GetSearchedTour = (data) => postApi('tour/search-tour', data)

//Tour Category
export const GetTourCategories = (isFeatured) =>
  getApi(
    `${
      isFeatured ? `tour/tour-category-list?is_featured=${isFeatured}` : 'tour/tour-category-list'
    }`,
  )
//Tour Package

export const GetTourPackages = (data) => postApi('tour/all-tour-packages', data)

//Tour Booking Request

export const GetTourBookingRequestListAPI = (data) =>
  postApi('tour-booking-request/user-request-list', data)

//Get Single Tour Package

export const GetSelectedTourPackage = (slug) => getApi(`tour/tour-details/${slug}`)
//create tour package

export const createTourPackage = (data) => postApi('tour-booking-request/create-request', data)

//payment gateway

export const GetAllPaymentMethodApi = async (data) => await postApi('payment-method/list', data)

//Activity

export const GetActivityApi = async (data) => await postApi('activity/all-activity', data)

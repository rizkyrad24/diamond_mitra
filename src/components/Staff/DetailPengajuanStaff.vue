<script setup>
import dialog from '@/assets/img/Dialog.png';
import kirim from '@/assets/img/Dialogkirim.png';
import Loading from '../loading.vue';
import ModalFailed from '../modalfailed.vue';
import ModalSuccess from '../modalsuccess.vue';
import ModalDialog from '../modaldialog.vue';
</script>

<template>
  <div>
    <Loading :isVisible="isLoading" />
    <ModalFailed
      :isVisible="modalFailed.isVisible"
      :title="modalFailed.title"
      :message="modalFailed.message"
      @close="closeModalFailed"
    />
    <ModalSuccess :isVisible="modalSuccess.isVisible" :title="modalSuccess.title" :message="modalSuccess.message"
      @close="modalSuccess.closeFunction" />
    <ModalDialog :isVisible="modalDialog.isVisible" :title="modalDialog.title" :message="modalDialog.message"
      @close="modalDialog.closeFunction" @ok="modalDialog.okFunction" />
    <div class="flex w-auto h-[54px] rounded-lg bg-[#FFFFFF] border-collapse">
      <button @click="navigateToDetail">
        <h1 class="w-[51px] h-[22px] font-sans text-[#2671D9] text-[14px] font-semibold ml-6 mt-4 mb-4">Masuk</h1>
      </button>
      <svg width="8" height="12" class="mt-[21px] ml-2 mr-2" viewBox="0 0 8 12" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z"
          fill="#7F7F80" />
      </svg>
      <span class="w-[119px] h-[22px] font-sans text-[#7F7F80] text-[14px] font-semibold ml-1 mt-[17px]">Detail
        Pengajuan</span>
    </div>
    <div class="px-6 py-3">
      <div class="relative h-auto w-[1086px] rounded-lg bg-[#FFFFFF] border-collapse mx-auto">
        <div class="flex">
          <svg class="ml-4 mt-[10px]" width="6" height="28" viewBox="0 0 6 28" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="6" height="28" fill="#1F5AAD" />
          </svg>
          <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Detail Pengajuan {{
            dataBerkas?.base || 'PKS' }}</h1>
        </div>
        <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">{{ dataBerkas?.submissionNumber }}</h1>
        <!-- <PengajuanDiterima :isVisible="showPopup" @close="showPopup = false" /> -->
        <div
          class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#4791F2] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Informasi
            Umum</div>
          <button @click="toggleDropdownArrow" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen }" class="w-4 h-4 text-[#2671D9]" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen"
            class="flex flex-col w-[1046px] h-[320px] bg-[#FFFFFF] border-collapse rounded-bl-md rounded-br-md border-[#E5E7E9] border-[1px] ml-4 px-6 py-6">
            <div class="flex items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">No. Permintaan</h1>
              <span class="w-[92px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.submissionNumber }}</span>
              <div class="flex">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[300px]">Metode
                  Kemitraan</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{
                  dataBerkas?.partnershipMethod || '-' }}</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Judul</h1>
              <span class="w-[182px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.partnershipTitle || '-' }}</span>
              <div class="flex ml-[1px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[209px]">Jenis
                  Material</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{
                  dataBerkas?.materialType || '-' }}</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Nomor Anggaran</h1>
              <span class="w-[57px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.budgetNumber || '-' }}</span>
              <div class="flex ml-[335px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold">Jenis Kemitraan</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-[17px]">{{ dataBerkas.partnershipType }}</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Tipe Anggaran</h1>
              <span class="w-[43px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                dataBerkas?.budgetType || '-' }}</span>
              <div class="flex ml-[348px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold">Pelaksana</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-[18px]">{{
                  dataBerkas?.partnershipCandidate || '-' }}</span>
              </div>
            </div>
            <div class="w-[1046px] h-[1px] bg-[#E5E7E9] justify-center transform translate-x-[-2.3%] mt-6"></div>
            <div class="flex items-center mt-6">
              <div class="flex w-1/2">
                <h1 class="w-[130px] min-h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Latar Belakang</h1>
                <span class="min-h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{
                  dataBerkas?.background || '-' }}</span>
              </div>
              <div class="flex w-1/2">
                <h1 class="w-[130px] min-h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[40px]">Catatan
                </h1>
                <span class="min-h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{ dataBerkas?.note
                  || '-' }}</span>
              </div>
            </div>
            <div class="flex items-center mt-6">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Dibuat Oleh</h1>
              <span class="w-[92px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">{{ dataBerkas?.user ||
                '-' }}</span>
              <div class="flex">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[300px]">Tanggal
                </h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">{{
                  dataBerkas?.submissionDate || '-' }}</span>
              </div>
            </div>
          </div>
        </transition>
        <div
          class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#FFA229] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Lingkup
            Pekerjaan</div>
          <button @click="toggleDropdownArrow1" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen1 }" class="w-4 h-4 text-[#2671D9]" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen1"
            class="flex flex-col w-[1046px] h-[270px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-6 py-6 rounded-bl-md rounded-br-md">
            <div class="flex items-center justify-between w-full px-4">
              <div class="flex flex-col gap-2 items-center">
                <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Pembayaran</h1>
                <h1 class="w-[130px] h-[17px] text-[14px] text-[#7F7F80]">-</h1>
              </div>
              <div class="flex flex-col gap-2 items-center">
                <div class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Time Schedule</div>
                <div class="w-[130px] h-[17px] text-[14px] text-[#7F7F80]">-</div>
              </div>
              <div class="flex flex-col gap-2 items-center">
                <div class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Calon Mitra Bisnis
                </div>
                <div class="w-[130px] h-[17px] text-[14px] text-[#7F7F80]">{{ dataBerkas?.partnershipCandidate || "-" }}
                </div>
              </div>
            </div>
            <table class="table-auto w-auto text-left border-collapse border-[1px] border-[#E5E7E9] mt-4">
              <thead>
                <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                  <th class="p-2 border border-[#E5E7E9] w-[74px] h-[48px]">
                    <div class="flex items-center w-[74px]">
                      <span>No.</span>
                      <svg width="14" height="10" class="ml-3" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span class="px-3">Pekerjaan</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody v-if="base == 'PKS'" class="h-[54px] w-[998px]">
                <tr v-for="(item, index) in dataBerkas?.scopesPks" :key="index"
                  class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal w-[900px] h-[22px]">
                  <td class="p-2 border border-[#E5E7E9]">{{ index + 1 }}</td>
                  <td
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333]">
                    {{ item.scopeName }}</td>
                </tr>
              </tbody>
              <tbody v-else class="h-[54px] w-[998px]">
                <tr v-for="(item, index) in dataBerkas?.scopesMou" :key="index"
                  class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal w-[900px] h-[22px]">
                  <td class="p-2 border border-[#E5E7E9]">{{ index + 1 }}</td>
                  <td
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333]">
                    {{ item.scopeName }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </transition>
        <div v-if="base == 'PKS'"
          class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#0FB37D] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Informasi
            RAB</div>
          <button @click="toggleDropdownArrow2" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen2 }" class="w-4 h-4 text-[#2671D9]" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition v-if="base == 'PKS'" name="fade">
          <div v-if="isDropdownArrowOpen2"
            class="flex items-center w-[1046px] max-h-[430px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-6 py-6 rounded-bl-md rounded-br-md">
            <table class="table-auto w-auto text-left rounded-lg border-collapse border-[1px] border-[#E5E7E9] mt-3">
              <thead>
                <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                  <th class="p-2 border border-[#E5E7E9] w-[74px] h-[48px]">
                    <div class="flex items-center">
                      <span>No.</span>
                      <svg width="14" height="10" class="ml-3" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between w-[231px]">
                      <span class="px-3">Aksi</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between w-[231px]">
                      <span class="px-3">Deskripsi</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center w-[300px] justify-between">
                      <span class="px-3">Pelanggan</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span class="px-3">PLN/NonPLN</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC" />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC" />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="h-[54px] w-[231px]">
                <tr v-for="(item, index) in dataBerkas?.rab" :key="index"
                  class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">{{ index + 1 }}</td>
                  <td
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">
                    {{ item.product || "-" }}</td>
                  <td
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">
                    {{ item.costDesc || "-" }}</td>
                  <td
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">
                    {{ item.customer || "-" }}</td>
                  <td v-if="item.isPln"
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">
                    PLN</td>
                  <td v-else
                    class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">
                    Non PLN</td>
                </tr>
              </tbody>
            </table>
          </div>
        </transition>
        <div
          class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#F42495] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Berkas
            Lampiran</div>
          <button @click="toggleDropdownArrow3" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen3 }" class="w-4 h-4 text-[#2671D9]" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen3">
            <div v-if="base === 'PKS'">
              <div class="px-6 mt-6 mb-4 flex justify-between">
                <div>
                  <label class="text-[#4D5E80] font-semibold">KKB <span class="text-[#FF5656] text-xs">*</span></label>
                  <a :href="linkDownloadKKB" v-if="fileNameKKB" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNameKKB }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizeKKB }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
                <div>
                  <label class="text-[#4D5E80] font-semibold">KKR <span class="text-[#FF5656] text-xs">*</span></label>
                  <a :href="linkDownloadKKR" v-if="fileNameKKR" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNameKKR }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizeKKR }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
                <div>
                  <label class="text-[#4D5E80] font-semibold">KKF <span class="text-[#FF5656] text-xs">*</span></label>
                  <a :href="linkDownloadKKF" v-if="fileNameKKF" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNameKKF }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizeKKF }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
              </div>
              <div class="px-6 mt-6 mb-4 flex justify-between">
                <div>
                  <label class="text-[#4D5E80] font-semibold">KKO <span class="text-[#FF5656] text-xs">*</span></label>
                  <a :href="linkDownloadKKO" v-if="fileNameKKO" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNameKKO }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizeKKO }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
                <div>
                  <label class="text-[#4D5E80] font-semibold">Proposal Mitra
                    <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label>
                  <a :href="linkDownloadmitra" v-if="fileNamemitra" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNamemitra }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizemitra }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
                <div>
                  <label class="text-[#4D5E80] font-semibold">Dokumen Surat Menyurat
                    <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label>
                  <a :href="linkDownloadsurat" v-if="fileNamesurat" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNamesurat }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizesurat }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
              </div>
              <div class="px-6 mt-6 mb-4">
                <label class="text-[#4D5E80] font-semibold">Dokumen Lainnya
                  <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label>
                <a :href="linkDownloadlainnya" v-if="fileNamelainnya" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                  <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                    <path
                      d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                      fill="#2671D9" />
                  </svg>
                  <div class="py-2 w-[200px] flex-grow truncate pe-3">
                    <span class="text-[#333333] text-sm font-semibold">{{ fileNamelainnya }}</span>
                    <p class="text-[#9E9E9E] text-xs">{{ fileSizelainnya }}</p>
                  </div>
                </a>
                <div v-else class="w-[333px] h-auto">
                  <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="px-6 mt-6 mb-4 flex justify-between">
                <div>
                  <label class="text-[#4D5E80] font-semibold">Proposal Mitra
                    <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label>
                  <a :href="linkDownloadmitra" v-if="fileNamemitra" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNamemitra }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizemitra }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
                <div>
                  <label class="text-[#4D5E80] font-semibold">
                    Dokumen Surat Menyurat
                    <span class="text-[#FF5656] text-xs">*</span>
                  </label>
                  <a :href="linkDownloadsurat" v-if="fileNamesurat" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNamesurat }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizesurat }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
                <div>
                  <label class="text-[#4D5E80] font-semibold">Dokumen Lainnya
                    <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label>
                  <a :href="linkDownloadlainnya" v-if="fileNamelainnya" class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                    <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB" />
                      <path
                        d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z"
                        fill="#2671D9" />
                    </svg>
                    <div class="py-2 w-[200px] flex-grow truncate pe-3">
                      <span class="text-[#333333] text-sm font-semibold">{{ fileNamelainnya }}</span>
                      <p class="text-[#9E9E9E] text-xs">{{ fileSizelainnya }}</p>
                    </div>
                  </a>
                  <div v-else class="w-[333px] h-auto">
                    <span class="text-[#9E9E9E] text-sm font-semibold">File belum diupload</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="flex flex-row w-[1046px] h-auto ml-4 py-4">
          <div class="flex flex-col w-[511px] h-auto">
            <div class="flex items-center">
              <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Tanggapan</h1>
            </div>
            <div
              class="w-full h-[88px] bg-[#E0E0E0] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-start justify-start">
              <div class="flex p-4">
                <div class="ml-4">
                  <span class="block text-[#4D5E80] font-sans text-[14px] font-semibold">{{ dataBerkas?.responseText }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-[511px] h-auto ml-6">
            <div class="flex items-center">
              <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Approval</h1>
            </div>
            <div
              class="w-full h-[88px] bg-[#E0E0E0] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-start justify-start">
              <div class="flex p-4">
                <div class="ml-4">
                  <span class="block text-[#4D5E80] font-sans text-[14px] font-semibold">{{ dataBerkas?.approvalNote }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row w-[1046px] h-auto ml-4 py-7">
          <button @click="SendRevisiMayor" class="absolute bottom-[12px] right-[390px] flex">
            <div
              class="flex items-center justify-center w-[114px] h-[40px] rounded-lg bg-[#FFFFFF] border-[#2671D9] border-[1px] hover:bg-[#DBEAFE] cursor-pointer transition-all">
              <span class="text-[14px] font-sans font-medium text-[#2671D9] ml-3 mt-[9px] mr-3 mb-[9px]">Revisi
                Mayor</span>
            </div>
          </button>
          <button @click="SendRevisiMinor" class="absolute bottom-[12px] right-[255px] flex">
            <div
              class="flex items-center justify-center w-[114px] h-[40px] rounded-lg bg-[#FFFFFF] border-[#2671D9] border-[1px] hover:bg-[#DBEAFE] cursor-pointer transition-all">
              <span class="text-[14px] font-sans font-medium text-[#2671D9] ml-3 mt-[9px] mr-3 mb-[9px]">Revisi
                Minor</span>
            </div>
          </button>
          <button @click="SendTolak" class="absolute bottom-[12px] right-[115px] flex">
            <div
              class="flex items-center justify-center w-[125px] h-[40px] rounded-lg bg-[#FFFFFF] border-[#C53830] border-[1px] hover:bg-[#FEE2E2] cursor-pointer transition-all">
              <span class="text-[14px] font-sans font-medium text-[#C53830] ml-3 mt-[9px] mr-3 mb-[9px]">Reject ke
                User</span>
            </div>
          </button>
          <button @click="SendApprov" class="absolute bottom-[12px] right-[25px] flex">
            <div
              class="flex items-center justify-center w-[72px] h-[40px] rounded-lg bg-[#2671D9] hover:bg-[#1E5BB7] border-[#FFFFFF] border-[1px]">
              <span class="text-[14px] font-sans font-medium text-[#FFFFFF] ml-3 mt-[9px] mr-3 mb-[9px]">Terima</span>
            </div>
          </button>
        </div>
        <!-- <div v-if="showPengajuanDiterimaPopup"
          class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
          <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-[360px] h-[428px]">
            <div class="flex flex-col items-center mt-14 ml-8 mr-8 mb-14">
              <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="80" r="57" fill="#70D14E" fill-opacity="0.2" />
                <circle cx="100" cy="80" r="47" fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M126.837 61.06C125.312 59.6236 122.867 59.6504 121.376 61.12L91.1071 90.9558L78.6239 78.6513C77.133 77.1817 74.6878 77.1549 73.1625 78.5913C71.6372 80.0277 71.6093 82.3836 73.1002 83.8531L88.3452 98.88C89.0719 99.5962 90.0675 100 91.1071 100C92.1466 100 93.1423 99.5962 93.8689 98.88L126.9 66.3218C128.391 64.8522 128.363 62.4964 126.837 61.06Z"
                  fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M49.6564 33.7146C50.4777 33.7146 51.1435 33.0721 51.1435 32.2796C51.1435 31.487 50.4777 30.8445 49.6564 30.8445C48.8351 30.8445 48.1693 31.487 48.1693 32.2796C48.1693 33.0721 48.8351 33.7146 49.6564 33.7146ZM49.6564 34.4321C50.8883 34.4321 51.887 33.4684 51.887 32.2796C51.887 31.0907 50.8883 30.127 49.6564 30.127C48.4245 30.127 47.4258 31.0907 47.4258 32.2796C47.4258 33.4684 48.4245 34.4321 49.6564 34.4321Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M32.5548 78.9187C33.3761 78.9187 34.0419 78.2762 34.0419 77.4836C34.0419 76.6911 33.3761 76.0486 32.5548 76.0486C31.7335 76.0486 31.0678 76.6911 31.0678 77.4836C31.0678 78.2762 31.7335 78.9187 32.5548 78.9187ZM32.5548 79.6362C33.7868 79.6362 34.7855 78.6725 34.7855 77.4836C34.7855 76.2948 33.7868 75.3311 32.5548 75.3311C31.3229 75.3311 30.3242 76.2948 30.3242 77.4836C30.3242 78.6725 31.3229 79.6362 32.5548 79.6362Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.89077 87.032C9.71207 87.032 10.3779 86.3895 10.3779 85.5969C10.3779 84.8044 9.71207 84.1619 8.89077 84.1619C8.06948 84.1619 7.4037 84.8044 7.4037 85.5969C7.4037 86.3895 8.06948 87.032 8.89077 87.032ZM8.89077 87.7495C10.1227 87.7495 11.1214 86.7858 11.1214 85.5969C11.1214 84.4081 10.1227 83.4443 8.89077 83.4443C7.65884 83.4443 6.66016 84.4081 6.66016 85.5969C6.66016 86.7858 7.65884 87.7495 8.89077 87.7495Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M73.4491 22.951C75.0917 22.951 76.4233 21.666 76.4233 20.0808C76.4233 18.4957 75.0917 17.2107 73.4491 17.2107C71.8066 17.2107 70.475 18.4957 70.475 20.0808C70.475 21.666 71.8066 22.951 73.4491 22.951ZM73.4491 23.6685C75.5024 23.6685 77.1668 22.0622 77.1668 20.0808C77.1668 18.0994 75.5024 16.4932 73.4491 16.4932C71.3959 16.4932 69.7314 18.0994 69.7314 20.0808C69.7314 22.0622 71.3959 23.6685 73.4491 23.6685Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M36.2726 119.818C37.0939 119.818 37.7597 119.176 37.7597 118.383C37.7597 117.59 37.0939 116.948 36.2726 116.948C35.4513 116.948 34.7855 117.59 34.7855 118.383C34.7855 119.176 35.4513 119.818 36.2726 119.818ZM36.2726 120.536C37.5045 120.536 38.5032 119.572 38.5032 118.383C38.5032 117.194 37.5045 116.23 36.2726 116.23C35.0407 116.23 34.042 117.194 34.042 118.383C34.042 119.572 35.0407 120.536 36.2726 120.536Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M37.7597 24.3865C39.4023 24.3865 40.7339 23.1015 40.7339 21.5164C40.7339 19.9312 39.4023 18.6462 37.7597 18.6462C36.1171 18.6462 34.7855 19.9312 34.7855 21.5164C34.7855 23.1015 36.1171 24.3865 37.7597 24.3865ZM37.7597 25.104C39.8129 25.104 41.4774 23.4978 41.4774 21.5164C41.4774 19.535 39.8129 17.9287 37.7597 17.9287C35.7065 17.9287 34.042 19.535 34.042 21.5164C34.042 23.4978 35.7065 25.104 37.7597 25.104Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.2353 50.5242C16.8779 50.5242 18.2094 49.2392 18.2094 47.6541C18.2094 46.0689 16.8779 44.7839 15.2353 44.7839C13.5927 44.7839 12.2611 46.0689 12.2611 47.6541C12.2611 49.2392 13.5927 50.5242 15.2353 50.5242ZM15.2353 51.2417C17.2885 51.2417 18.953 49.6355 18.953 47.6541C18.953 45.6727 17.2885 44.0664 15.2353 44.0664C13.182 44.0664 11.5176 45.6727 11.5176 47.6541C11.5176 49.6355 13.182 51.2417 15.2353 51.2417Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M122.523 24.3865C124.166 24.3865 125.498 23.1015 125.498 21.5164C125.498 19.9312 124.166 18.6462 122.523 18.6462C120.881 18.6462 119.549 19.9312 119.549 21.5164C119.549 23.1015 120.881 24.3865 122.523 24.3865ZM122.523 25.104C124.577 25.104 126.241 23.4978 126.241 21.5164C126.241 19.535 124.577 17.9287 122.523 17.9287C120.47 17.9287 118.806 19.535 118.806 21.5164C118.806 23.4978 120.47 25.104 122.523 25.104Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M158.957 50.9353C160.6 50.9353 161.931 49.6503 161.931 48.0652C161.931 46.4801 160.6 45.1951 158.957 45.1951C157.314 45.1951 155.983 46.4801 155.983 48.0652C155.983 49.6503 157.314 50.9353 158.957 50.9353ZM158.957 51.6529C161.01 51.6529 162.675 50.0466 162.675 48.0652C162.675 46.0838 161.01 44.4775 158.957 44.4775C156.904 44.4775 155.239 46.0838 155.239 48.0652C155.239 50.0466 156.904 51.6529 158.957 51.6529Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M156.11 22.3963C157.753 22.3963 159.084 21.1113 159.084 19.5261C159.084 17.941 157.753 16.656 156.11 16.656C154.468 16.656 153.136 17.941 153.136 19.5261C153.136 21.1113 154.468 22.3963 156.11 22.3963ZM156.11 23.1138C158.164 23.1138 159.828 21.5076 159.828 19.5261C159.828 17.5447 158.164 15.9385 156.11 15.9385C154.057 15.9385 152.393 17.5447 152.393 19.5261C152.393 21.5076 154.057 23.1138 156.11 23.1138Z"
                  fill="#70D14E" />
                <ellipse cx="139.624" cy="134.886" rx="2.23063" ry="2.15259" fill="#70D14E" />
                <ellipse cx="168.227" cy="141.852" rx="2.23063" ry="2.15259" fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M112.857 148.519C114.5 148.519 115.831 147.234 115.831 145.649C115.831 144.064 114.5 142.779 112.857 142.779C111.215 142.779 109.883 144.064 109.883 145.649C109.883 147.234 111.215 148.519 112.857 148.519ZM112.857 149.237C114.911 149.237 116.575 147.631 116.575 145.649C116.575 143.668 114.911 142.062 112.857 142.062C110.804 142.062 109.14 143.668 109.14 145.649C109.14 147.631 110.804 149.237 112.857 149.237Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M33.2988 148.519C34.9413 148.519 36.2729 147.234 36.2729 145.649C36.2729 144.064 34.9413 142.779 33.2988 142.779C31.6562 142.779 30.3246 144.064 30.3246 145.649C30.3246 147.234 31.6562 148.519 33.2988 148.519ZM33.2988 149.237C35.352 149.237 37.0164 147.631 37.0164 145.649C37.0164 143.668 35.352 142.062 33.2988 142.062C31.2455 142.062 29.5811 143.668 29.5811 145.649C29.5811 147.631 31.2455 149.237 33.2988 149.237Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M133.766 159.282C135.408 159.282 136.74 157.997 136.74 156.412C136.74 154.827 135.408 153.542 133.766 153.542C132.123 153.542 130.791 154.827 130.791 156.412C130.791 157.997 132.123 159.282 133.766 159.282ZM133.766 160C135.819 160 137.483 158.393 137.483 156.412C137.483 154.43 135.819 152.824 133.766 152.824C131.712 152.824 130.048 154.43 130.048 156.412C130.048 158.393 131.712 160 133.766 160Z"
                  fill="#70D14E" />
                <ellipse cx="63.0402" cy="137.039" rx="2.23061" ry="2.15261" fill="#70D14E" />
                <ellipse cx="20.2621" cy="63.7553" rx="4.85779" ry="4.68788" fill="#70D14E" />
                <ellipse cx="113.533" cy="4.68788" rx="4.85779" ry="4.68788" fill="#70D14E" />
                <ellipse cx="25.1195" cy="102.196" rx="4.85779" ry="4.68788" fill="#70D14E" />
                <ellipse cx="54.266" cy="8.43788" rx="4.85779" ry="4.68788" fill="#70D14E" />
                <ellipse cx="143.65" cy="4.68788" rx="4.85779" ry="4.68788" fill="#70D14E" />
                <ellipse cx="177.654" cy="30.9398" rx="4.85779" ry="4.68788" fill="#70D14E" />
                <ellipse cx="195.142" cy="80.6322" rx="4.85779" ry="4.68788" fill="#70D14E" />
                <ellipse cx="175.711" cy="119.073" rx="4.85779" ry="4.68788" fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M36.1789 41.2498L30.6023 44.3568L36.1789 47.4638L36.1789 41.2498ZM35.4354 42.4926L32.0894 44.3568L35.4354 46.221L35.4354 42.4926Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.48553 60.45L3.87176 66.6528L9.24516 63.2287L3.48553 60.45ZM4.30498 61.6475L4.53671 65.3692L7.76076 63.3147L4.30498 61.6475Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M162.531 110.222L156.284 108.714L158.055 114.689L162.531 110.222ZM161.101 110.616L157.353 109.712L158.416 113.297L161.101 110.616Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M193.369 104.822L195.558 98.9777L189.219 100.07L193.369 104.822ZM193.107 103.409L194.421 99.9025L190.617 100.558L193.107 103.409Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M96.4617 152.061L90.2147 150.554L91.9857 156.529L96.4617 152.061ZM95.032 152.456L91.2838 151.552L92.3464 155.136L95.032 152.456Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M158.775 133.256L157.504 127.165L152.672 131.273L158.775 133.256ZM157.792 132.18L157.029 128.525L154.13 130.99L157.792 132.18Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M142.868 35.27L148.404 32.0966L142.788 29.0564L142.868 35.27ZM143.595 34.0184L146.917 32.1143L143.548 30.2902L143.595 34.0184Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M43.9459 132.324L47.3922 137.573L50.3796 132.068L43.9459 132.324ZM45.2632 132.99L47.331 136.139L49.1235 132.836L45.2632 132.99Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M161.424 71.3345L164.871 76.5837L167.858 71.0789L161.424 71.3345ZM162.742 72.0003L164.81 75.1498L166.602 71.8469L162.742 72.0003Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M188.529 56.5212L194.84 55.2865L190.577 50.6297L188.529 56.5212ZM189.644 55.571L193.43 54.8302L190.872 52.0361L189.644 55.571Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M92.4676 7.90285L97.6675 15.8227L102.175 7.51709L92.4676 7.90285ZM94.4553 8.9074L97.5752 13.6593L100.28 8.67594L94.4553 8.9074Z"
                  fill="#70D14E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M79.7753 144.537L78.7883 148.141L82.5167 147.164L79.7753 144.537ZM80.1652 145.922L79.8362 147.123L81.079 146.797L80.1652 145.922Z"
                  fill="#70D14E" />
                <path d="M173.462 90.7182L172.953 98.8229L165.934 94.3449L173.462 90.7182Z" fill="#70D14E" />
                <path d="M177.654 62.8174L181.861 69.8492H173.447L177.654 62.8174Z" fill="#70D14E" />
                <path d="M9.14523 102.856L9.0308 110.975L1.802 106.82L9.14523 102.856Z" fill="#70D14E" />
                <path d="M15.8071 125.443L23.9868 123.541L21.6044 131.328L15.8071 125.443Z" fill="#70D14E" />
              </svg>
              <h2 class="text-[20px] font-sans font-semibold text-[#333333] mt-2 mb-2">Pengajuan Diterima</h2>
              <p class="text-[16px] font-sans text-[#333333] font-normal mb-6 text-center">Pengajuan akan dilanjutkan ke
                proses selanjutnya.</p>
              <button @click="closePopup"
                class="bg-[#2671D9] hover:bg-[#1E5BB7] text-[#FFFFFF] text-[14px] p-2 rounded-lg w-full">Lanjutkan</button>
            </div>
          </div>
        </div> -->
        <!-- Start Pop up -->
        <div>
          <!-- Setujui Pengajuan -->
          <div v-if="isSendSetuju" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-lg w-[360px] h-[476px]">
              <div @click="closeApprov" class="flex justify-end cursor-pointer">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292894C10.6834 -0.0976307 11.3166 -0.0976307 11.7071 0.292894C12.0976 0.683418 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                    fill="#CCCCCC" />
                </svg>
              </div>
              <div class="flex justify-center"><img :src="dialog" alt="Dialog Image" class="pt-6"></div>
              <div class="flex justify-center">
                <h1 class="text-[#333333] text-xl font-semibold mt-2">Terima Pengajuan</h1>
              </div>
              <div class="flex justify-center mt-3">
                <p class="text-center">Apakah Anda yakin ingin menerima pengajuan ini ?</p>
              </div>
              <div class="flex justify-center mt-8">
                <button @click="openSetuju"
                  class="w-[296px] h-[40px] bg-[#2671D9] text-white text-sm font-semibold rounded-lg">Terima</button>
              </div>
              <div class="flex justify-center mt-2">
                <button style="border: solid 2px #2671D9;" @click="closeApprov"
                  class="w-[296px] h-[40px] text-[#2671D9] text-sm font-semibold rounded-lg hover:bg-[#DBEAFE] transition-all">Batal</button>
              </div>
            </div>
          </div>
          <!-- Setujui Pengajuan -->
          <div v-if="isSelesaiSetuju" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-lg w-[360px] h-[428px]">
              <div class="flex justify-center"><img :src="kirim" alt="Dialog Image" class="pt-6"></div>
              <div class="flex justify-center">
                <h1 class="text-[#333333] text-xl font-semibold mt-2">Pengajuan Telah Diterima</h1>
              </div>
              <div class="ml-8 mt-3 w-[250px]">
                <p class="text-center">Anda telah berhasil menerima pengajuan ini.</p>
              </div>
              <div class="flex justify-center mt-8">
                <button @click="closeSelesai"
                  class="w-[296px] h-[40px] bg-[#2671D9] text-white text-sm font-semibold rounded-lg">Selesai</button>
              </div>
            </div>
          </div>

          <!-- Tolak Pengajuan -->
          <div v-if="isSendTolak" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-lg w-[360px] h-[476px]">
              <div @click="closeTolak" class="flex justify-end cursor-pointer">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292894C10.6834 -0.0976307 11.3166 -0.0976307 11.7071 0.292894C12.0976 0.683418 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                    fill="#CCCCCC" />
                </svg>
              </div>
              <div class="flex justify-center"><img :src="dialog" alt="Dialog Image" class="pt-6"></div>
              <div class="flex justify-center">
                <h1 class="text-[#333333] text-xl font-semibold mt-2">Tolak Pengajuan</h1>
              </div>
              <div class="flex justify-center mt-3">
                <p class="text-center">Apakah Anda yakin ingin menolak pengajuan ini ?</p>
              </div>
              <div class="flex justify-center mt-8">
                <button @click="openTolak"
                  class="w-[296px] h-[40px] bg-[#FF5656] text-white text-sm font-semibold rounded-lg">Tolak</button>
              </div>
              <div class="flex justify-center mt-2">
                <button style="border: solid 2px #2671D9;" @click="closeTolak"
                  class="w-[296px] h-[40px] border-[1px] border-[#2671D9] text-[#2671D9] text-sm font-semibold rounded-lg hover:bg-[#DBEAFE] transition-all">Batal</button>
              </div>
            </div>
          </div>
          <!-- Tolak Pengajuan -->
          <div v-if="isSelesaiTolak" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-lg w-[360px] h-[428px]">
              <div class="flex justify-center"><img :src="kirim" alt="Dialog Image" class="pt-6"></div>
              <div class="flex justify-center">
                <h1 class="text-[#333333] text-xl font-semibold mt-2">Pengajuan Telah Ditolak</h1>
              </div>
              <div class="ml-8 mt-3 w-[240px]">
                <p class="text-center">Anda telah berhasil menolak pengajuan ini.</p>
              </div>
              <div class="flex justify-center mt-8">
                <button @click="closeSelesaitolak"
                  class="w-[296px] h-[40px] bg-[#2671D9] text-white text-sm font-semibold rounded-lg">Selesai</button>
              </div>
            </div>
          </div>

          <!-- Revisi Minor Pengajuan -->
          <div v-if="isSendRevisiMinor" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-lg w-[360px] h-[476px]">
              <div @click="closeRevisiMinor" class="flex justify-end cursor-pointer">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292894C10.6834 -0.0976307 11.3166 -0.0976307 11.7071 0.292894C12.0976 0.683418 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                    fill="#CCCCCC" />
                </svg>
              </div>
              <div class="flex justify-center"><img :src="dialog" alt="Dialog Image" class="pt-6"></div>
              <div class="flex justify-center">
                <h1 class="text-[#333333] text-xl font-semibold mt-2">Permintaan Revisi Minor</h1>
              </div>
              <div class="flex justify-center mt-3">
                <p class="text-center">Apakah Anda yakin ingin meminta pengajuan ini direvisi minor?</p>
              </div>
              <div class="flex justify-center mt-8">
                <button style="border: solid 2px #2671D9;" @click="openRevisiMinor"
                  class="w-[296px] h-[40px] border-[1px] border-[#2671D9] text-[#2671D9] text-sm font-semibold rounded-lg hover:bg-[#DBEAFE] transition-all">Revisi Minor</button>
              </div>
              <div class="flex justify-center mt-2">
                <button style="border: solid 2px #2671D9;" @click="closeRevisiMinor"
                  class="w-[296px] h-[40px] border-[1px] border-[#2671D9] text-[#2671D9] text-sm font-semibold rounded-lg hover:bg-[#DBEAFE] transition-all">Batal</button>
              </div>
            </div>
          </div>
          <!-- Revisi Minor Pengajuan -->
          <div v-if="isSelesaiRevisiMinor" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-lg w-[360px] h-[428px]">
              <div class="flex justify-center"><img :src="kirim" alt="Dialog Image" class="pt-6"></div>
              <div class="flex justify-center">
                <h1 class="text-[#333333] text-xl font-semibold mt-2">Pengajuan Telah Diminta Untuk
                  Revisi Minor</h1>
              </div>
              <div class="ml-8 mt-3 w-[240px]">
                <p class="text-center">Anda telah berhasil meminta pengajuan ini direvisi minor.</p>
              </div>
              <div class="flex justify-center mt-8">
                <button @click="closeSelesaiRevisiMinor"
                  class="w-[296px] h-[40px] bg-[#2671D9] text-white text-sm font-semibold rounded-lg">Selesai</button>
              </div>
            </div>
          </div>

          <!-- Revisi Mayor Pengajuan -->
          <div v-if="isSendRevisiMayor" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-lg w-[360px] h-[476px]">
              <div @click="closeRevisiMayor" class="flex justify-end cursor-pointer">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292894C10.6834 -0.0976307 11.3166 -0.0976307 11.7071 0.292894C12.0976 0.683418 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                    fill="#CCCCCC" />
                </svg>
              </div>
              <div class="flex justify-center"><img :src="dialog" alt="Dialog Image" class="pt-6"></div>
              <div class="flex justify-center">
                <h1 class="text-[#333333] text-xl font-semibold mt-2">Permintaan Revisi Mayor</h1>
              </div>
              <div class="flex justify-center mt-3">
                <p class="text-center">Apakah Anda yakin ingin meminta pengajuan ini direvisi Mayor?</p>
              </div>
              <div class="flex justify-center mt-8">
                <button style="border: solid 2px #2671D9;" @click="openRevisiMayor"
                  class="w-[296px] h-[40px] border-[1px] border-[#2671D9] text-[#2671D9] text-sm font-semibold rounded-lg hover:bg-[#DBEAFE] transition-all">Revisi</button>
              </div>
              <div class="flex justify-center mt-2">
                <button style="border: solid 2px #2671D9;" @click="closeRevisiMayor"
                  class="w-[296px] h-[40px] border-[1px] border-[#2671D9] text-[#2671D9] text-sm font-semibold rounded-lg hover:bg-[#DBEAFE] transition-all">Batal</button>
              </div>
            </div>
          </div>
          <!-- Revisi Mayor Pengajuan -->
          <div v-if="isSelesaiRevisiMayor" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-lg w-[360px] h-[428px]">
              <div class="flex justify-center"><img :src="kirim" alt="Dialog Image" class="pt-6"></div>
              <div class="flex justify-center">
                <h1 class="text-[#333333] text-xl font-semibold mt-2">Pengajuan Telah Diminta Untuk
                  Revisi Mayor</h1>
              </div>
              <div class="ml-8 mt-3 w-[240px]">
                <p class="text-center">Anda telah berhasil meminta pengajuan ini direvisi mayor.</p>
              </div>
              <div class="flex justify-center mt-8">
                <button @click="closeSelesaiRevisiMayor"
                  class="w-[296px] h-[40px] bg-[#2671D9] text-white text-sm font-semibold rounded-lg">Selesai</button>
              </div>
            </div>
          </div>
        </div>
        <!-- End Pop up -->
      </div>
    </div>
  </div>
</template>

<script>
import { fetchGet, fetchPost } from '@/api/apiFunction';
import { baseURL } from '@/api/apiManager';

export default {
  data() {
    return {
      // fileDetails: {
      //   KKB: { fileName: "", fileSize: "" },
      //   KKR: { fileName: "", fileSize: "" },
      //   KKF: { fileName: "", fileSize: "" },
      //   KKO: { fileName: "", fileSize: "" },
      //   ProposalMitra: { fileName: "", fileSize: "" },
      //   DokumenSuratMenyurat: { fileName: "", fileSize: "" },
      //   DokumenLainnya: { fileName: "", fileSize: "" },
      // },
      showPengajuanDiterimaPopup: false,
      isDropdownArrowOpen: false,
      isDropdownArrowOpen1: false,
      isDropdownArrowOpen2: false,
      isDropdownArrowOpen3: false,
      showDropdown: false,
      showPopup: false,

      dataBerkas: null,
      base: null,
      id: null,
      fileNameKKB: null,
      fileSizeKKB: null,
      linkDownloadKKB: "",
      fileNameKKR: null,
      fileSizeKKR: null,
      linkDownloadKKR: "",
      fileNameKKF: null,
      fileSizeKKF: null,
      linkDownloadKKF: "",
      fileNameKKO: null,
      fileSizeKKO: null,
      linkDownloadKKO: "",
      fileNamemitra: null,
      fileSizemitra: null,
      linkDownloadmitra: "",
      fileNamesurat: null,
      fileSizesurat: null,
      linkDownloadsurat: "",
      fileNamelainnya: null,
      fileSizelainnya: null,
      linkDownloadlainnya: "",

      modalFailed: {
        isVisible: false,
        title: '',
        message: ''
      },
      modalSuccess: {
        isVisible: false,
        title: '',
        message: '',
        closeFunction: () => null
      },
      modalDialog: {
        isVisible: false,
        title: '',
        message: '',
        okFunction: () => null,
        closeFunction: () => null
      },
      isLoading: false,

      // // Popup Acprrove
      // isSendSetuju: false,
      // isSelesaiSetuju: false,

      // // Popup Tolak
      // isSendTolak: false,
      // isSelesaiTolak: false,

      // // Popup Revisi Minor
      // isSendRevisiMinor: false,
      // isSelesaiRevisiMinor: false,

      // // Popup Revisi Mayor
      // isSendRevisiMayor: false,
      // isSelesaiRevisiMayor: false,
    };
  },
  methods: {
    closeModalFailed() {
      this.modalFailed = {
        isVisible: false,
        title: '',
        message: ''
      }
    },
    closeModalSuccess() {
      this.modalSuccess = {
        isVisible: false,
        title: '',
        message: '',
        closeFunction: () => null
      }
    },
    closeModalDialog() {
      this.modalDialog = {
        isVisible: false,
        title: '',
        message: '',
        okFunction: () => null,
        closeFunction: () => null
      }
    },
    closePopup() {
      this.showPengajuanDiterimaPopup = false;
    },
    toggleDropdownArrow() {
      this.isDropdownArrowOpen = !this.isDropdownArrowOpen;
    },
    toggleDropdownArrow1() {
      this.isDropdownArrowOpen1 = !this.isDropdownArrowOpen1;
    },
    toggleDropdownArrow2() {
      this.isDropdownArrowOpen2 = !this.isDropdownArrowOpen2;
    },
    toggleDropdownArrow3() {
      this.isDropdownArrowOpen3 = !this.isDropdownArrowOpen3;
    },
    navigateToDetail() {
      this.$router.push("/masukstaff");
    },

    // Popup Aprrove
    SendApprov() {
      this.showApprovPopup = false;
      this.modalDialog = {
        isVisible: true,
        title: 'Terima Pengajuan',
        message: `Apakan anda yakin akan menerima pengajuan ini`,
        okFunction: this.openApprov,
        closeFunction: this.closeApprov
      }
    },
    openApprov() {
      this.closeModalDialog();
      this.postAproval(this.successApprov, this.failApprov);
    },
    closeApprov() {
      this.closeModalDialog()
      this.showApprovPopup = true;
    },
    successApprov() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Terima Pengajuan Berhasil',
        message: `Pengajuan berhasil diterima`,
        closeFunction: this.closeSelesaiApprov
      }
    },
    failApprov(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Terima Pengajuan Gagal',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiApprov() {
      this.closeModalSuccess();
      this.$router.push('/masukstaff')
    },

    // Popup Tolak
    SendTolak() {
      this.showTolakPopup = false;
      this.modalDialog = {
        isVisible: true,
        title: 'Tolak Pengajuan',
        message: `Apakan anda yakin akan menolak pengajuan ini`,
        okFunction: this.openTolak,
        closeFunction: this.closeTolak
      }
    },
    openTolak() {
      this.closeModalDialog();
      this.postTolak(this.successTolak, this.failTolak);
    },
    closeTolak() {
      this.closeModalDialog()
      this.showTolakPopup = true;
    },
    successTolak() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Tolak Pengajuan Berhasil',
        message: `Pengajuan berhasil ditolak`,
        closeFunction: this.closeSelesaiTolak
      }
    },
    failTolak(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Tolak Pengajuan Gagal',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiTolak() {
      this.closeModalSuccess();
      this.$router.push('/masukstaff')
    },

    // Popup RevisiMinor
    SendRevisiMinor() {
      this.showRevisiMinorPopup = false;
      this.modalDialog = {
        isVisible: true,
        title: 'Revisi Minor Pengajuan',
        message: `Apakan anda yakin akan meminta revisi minor pengajuan ini`,
        okFunction: this.openRevisiMinor,
        closeFunction: this.closeRevisiMinor
      }
    },
    openRevisiMinor() {
      this.closeModalDialog();
      this.postRevisiMinor(this.successRevisiMinor, this.failRevisiMinor);
    },
    closeRevisiMinor() {
      this.closeModalDialog()
      this.showRevisiMinorPopup = true;
    },
    successRevisiMinor() {
      this.modalSuccess = {
        isVisible: true,
        title: 'Permintaan Revisi Minor Berhasil',
        message: `Pengajuan berhasil diminta untuk Revisi Minor`,
        closeFunction: this.closeSelesaiRevisiMinor
      }
    },
    failRevisiMinor(data) {
      this.modalFailed = {
        isVisible: true,
        title: 'Permintaan Revisi Minor Gagal',
        message: data?.message ? data.message : "Silahkan hubungi admin"
      }
    },
    closeSelesaiRevisiMinor() {
      this.closeModalSuccess();
      this.$router.push('/masukstaff')
    },

    // // Popup Aprrove
    // SendApprov() {
    //   this.isSendSetuju = true;
    //   this.isSelesaiSetuju = false;
    // },
    // closeApprov() {
    //   this.isSendSetuju = false;
    // },
    // openSetuju() {
    //   this.postAproval();
    //   // this.isSelesaiSetuju = true;
    //   // this.isSendSetuju = false; 
    // },
    // closeSelesai() {
    //   this.isSelesaiSetuju = false;
    //   this.$router.push('/masukstaff')
    // },

    // // Popup Tolak
    // SendTolak() {
    //   this.isSendTolak = true;
    //   this.isSelesaiTolak = false;
    // },
    // closeTolak() {
    //   this.isSendTolak = false;
    // },
    // openTolak() {
    //   this.postTolak();
    //   // this.isSelesaiTolak = true;
    //   // this.isSendTolak = false; 
    // },
    // closeSelesaitolak() {
    //   this.isSelesaiTolak = false;
    //   this.$router.push('/masukstaff')
    // },

    // // Popup Revisi Minor
    // SendRevisiMinor() {
    //   this.isSendRevisiMinor = true;
    //   this.isSelesaiRevisiMinor = false;
    // },
    // closeRevisiMinor() {
    //   this.isSendRevisiMinor = false;
    // },
    // openRevisiMinor() {
    //   this.postRevisiMinor();
    //   // this.isSelesaiRevisiMinor = true;
    //   // this.isSendRevisiMinor = false; 
    // },
    // closeSelesaiRevisiMinor() {
    //   this.isSelesaiRevisiMinor = false;
    //   this.$router.push('/masukstaff')
    // },

    // // Popup Revisi Mayor
    // SendRevisiMayor() {
    //   this.isSendRevisiMayor = true;
    //   this.isSelesaiRevisiMayor = false;
    // },
    // closeRevisiMayor() {
    //   this.isSendRevisiMayor = false;
    // },
    // openRevisiMayor() {
    //   this.postRevisiMayor();
    //   // this.isSelesaiRevisiMayor = true;
    //   // this.isSendRevisiMayor = false; 
    // },
    // closeSelesaiRevisiMayor() {
    //   this.isSelesaiRevisiMayor = false;
    //   this.$router.push('/masukstaff')
    // },

    // api
    async getDataApi(base, id) {
      this.isLoading = true;
      if (base == "PKS") {
        const res = await fetchGet(`mitra/manager/pks/incoming-data/${id}`, null, this.$router);
        if (res.status == 200) {
          this.dataBerkas = res.data;
          res.data.attachmentsPks.forEach((item) => {
            if (item.fileType == 'KKO') {
              this.fileNameKKO = item.fileName;
              this.fileSizeKKO = item.fileSize;
              this.linkDownloadKKO = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'KKF') {
              this.fileNameKKF = item.fileName;
              this.fileSizeKKF = item.fileSize;
              this.linkDownloadKKF = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'KKR') {
              this.fileNameKKR = item.fileName;
              this.fileSizeKKR = item.fileSize;
              this.linkDownloadKKR = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'KKB') {
              this.fileNameKKB = item.fileName;
              this.fileSizeKKB = item.fileSize;
              this.linkDownloadKKB = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'Dokumen Surat Menyurat') {
              this.fileNamesurat = item.fileName;
              this.fileSizesurat = item.fileSize;
              this.linkDownloadsurat = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'Proposal Mitra') {
              this.fileNamemitra = item.fileName;
              this.fileSizemitra = item.fileSize;
              this.linkDownloadmitra = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'Dokumen Lainnya') {
              this.fileNamelainnya = item.fileName;
              this.fileSizelainnya = item.fileSize;
              this.linkDownloadlainnya = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
          })
          // if (
          //   this.fileNameKKB && this.fileSizeKKB && this.fileNameKKR && this.fileSizeKKR &&
          //   this.fileNameKKF && this.fileSizeKKF && this.fileNameKKO && this.fileSizeKKO &&
          //   res.data.partnershipTitle && res.data.partnershipMethod &&
          //   res.data.scopesPks.length > 0 && res.data.rab.length > 0 &&
          //   res.data.partnershipType && res.data.budgetType &&
          //   res.data.budgetNumber && res.data.materialType && res.data.partnershipCandidate
          // ) {
          //   this.disableKirim = false;
          // }
          this.isLoading = false;
          console.log(res.data);
        } else {
          this.isLoading = false;
          this.modalFailed = {
            isVisible: true,
            title: 'Gagal Ambil Data',
            message: res.data.message ? res.data.message : "Silahkan hubungi admin"
          }
        }
      } else {
        const res = await fetchGet(
          `mitra/staff/mounda/incoming-data/${id}`,
          null,
          this.$router
        );
        if (res.status == 200) {
          this.dataBerkas = res.data;
          res.data.attachmentsMou.forEach((item) => {
            if (item.fileType == 'Dokumen Surat Menyurat') {
              this.fileNamesurat = item.fileName;
              this.fileSizesurat = item.fileSize;
              this.linkDownloadsurat = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'Proposal Mitra') {
              this.fileNamemitra = item.fileName;
              this.fileSizemitra = item.fileSize;
              this.linkDownloadmitra = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
            if (item.fileType == 'Dokumen Lainnya') {
              this.fileNamelainnya = item.fileName;
              this.fileSizelainnya = item.fileSize;
              this.linkDownloadlainnya = `${baseURL.replace('/api',"")}/download/file/${item.id}`
            }
          })
          // if (
          //   this.fileNamesurat && this.fileSizesurat && res.data.partnershipTitle &&
          //   res.data.partnershipCandidate && res.data.scopesMou.length > 0
          // ) {
          //   this.disableKirim = false;
          // }
          this.isLoading = false;
          console.log(res.data);
        } else {
          this.isLoading = false;
          this.modalFailed = {
            isVisible: true,
            title: 'Gagal Ambil Data',
            message: res.data.message ? res.data.message : "Silahkan hubungi admin"
          }
        }
      }
    },
    async postAproval(successFunction, failFunction) {
      this.isLoading = true;
      if (this.base == "PKS") {
        const res = await fetchPost(`mitra/staff/pks/incoming-data/${this.id}`, null, null, this.$router);
        if (res.status == 200) {
          // this.isSelesaiSetuju = true;
          // this.isSendSetuju = false;
          this.isLoading = false;
          successFunction();
          console.log(res.data)
        } else {
          this.isLoading = false;
          failFunction();
        }
      } else {
        const res = await fetchPost(`mitra/staff/mounda/incoming-data/${this.id}`, null, null, this.$router);
        if (res.status == 200) {
          // this.isSelesaiSetuju = true;
          // this.isSendSetuju = false;
          this.isLoading = false;
          successFunction();
          console.log(res.data)
        } else {
          this.isLoading = false;
          failFunction();
        }
      }
    },
    async postRevisiMinor(successFunction, failFunction) {
      this.isLoading = true;
      if (this.base == "PKS") {
        const res = await fetchPost(`mitra/staff/pks/incoming-data/${this.id}/minor-revision`, null, null, this.$router);
        if (res.status == 200) {
          // this.isSelesaiRevisiMinor = true;
          // this.isSendRevisiMinor = false;
          this.isLoading = false;
          successFunction();
          console.log(res.data)
        } else {
          this.isLoading = false;
          failFunction();
        }
      } else {
        const res = await fetchPost(`mitra/staff/mounda/incoming-data/${this.id}/minor-revision`, null, null, this.$router);
        if (res.status == 200) {
          // this.isSelesaiRevisiMinor = true;
          // this.isSendRevisiMinor = false;
          this.isLoading = false;
          successFunction();
          console.log(res.data)
        } else {
          this.isLoading = false;
          failFunction();
        }
      }
    },
    async postRevisiMayor(successFunction, failFunction) {
      this.isLoading = true;
      if (this.base == "PKS") {
        const res = await fetchPost(`mitra/staff/pks/incoming-data/${this.id}/mayor-revision`, null, null, this.$router);
        if (res.status == 200) {
          // this.isSelesaiRevisiMayor = true;
          // this.isSendRevisiMayor = false;
          this.isLoading = false;
          successFunction();
          console.log(res.data)
        } else {
          this.isLoading = false;
          failFunction();
        }
      } else {
        const res = await fetchPost(`mitra/staff/mounda/incoming-data/${this.id}/mayor-revision`, null, null, this.$router);
        if (res.status == 200) {
          // this.isSelesaiRevisiMayor = true;
          // this.isSendRevisiMayor = false;
          this.isLoading = false;
          successFunction();
          console.log(res.data)
        } else {
          this.isLoading = false;
          failFunction();
        }
      }
    },
    async postTolak(successFunction, failFunction) {
      this.isLoading = true;
      if (this.base == "PKS") {
        const res = await fetchPost(`mitra/staff/pks/incoming-data/${this.id}/reject`, null, null, this.$router);
        if (res.status == 200) {
          // this.isSelesaiTolak = true;
          // this.isSendTolak = false;
          this.isLoading = false;
          successFunction();
          console.log(res.data)
        } else {
          this.isLoading = false;
          failFunction();
        }
      } else {
        const res = await fetchPost(`mitra/staff/mounda/incoming-data/${this.id}/reject`, null, null, this.$router);
        if (res.status == 200) {
          // this.isSelesaiTolak = true;
          // this.isSendTolak = false;
          this.isLoading = false;
          successFunction();
          console.log(res.data)
        } else {
          this.isLoading = false;
          failFunction();
        }
      }
    }
  },
  mounted() {
    if (this.$route.params.id && this.$route.params.base) {
      this.getDataApi(this.$route.params.base, this.$route.params.id);
    }
    this.base = this.$route.params.base;
    this.id = this.$route.params.id;
  },
};
</script>

<style>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
